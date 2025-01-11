import { useEffect, useRef, useState } from 'react';

const PayPalCheckout = ({ totalPrice }) => {
  const [isSdkLoaded, setIsSdkLoaded] = useState(false);
  const [isButtonRendered, setIsButtonRendered] = useState(false);
  const paypalContainerRef = useRef(null);

  useEffect(() => {
    // Obtener el CLIENT_ID desde las variables de entorno
    const environment = process.env.NEXT_PUBLIC_PAYPAL_ENVIRONMENT;
    const client_id =
      environment === 'sandbox'
        ? process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID
        : process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID_PRO;
    const client_secret =
      environment === 'sandbox'
        ? process.env.NEXT_PUBLIC_PAYPAL_CLIENT_SECRET
        : process.env.NEXT_PUBLIC_PAYPAL_CLIENT_SECRET_PRO;
    // Crear y cargar el script del SDK de PayPal
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${client_id}`;
    script.async = true;
    script.onload = () => {
      console.log('PayPal SDK cargado');
      setIsSdkLoaded(true); // Marcar el SDK como cargado
    };
    document.body.appendChild(script);

    // Limpieza: eliminar el script al desmontar
    return () => {
      document.body.removeChild(script);
      setIsSdkLoaded(false);
    };
  }, []);

  useEffect(() => {
    // Renderizar el botón de PayPal solo cuando el SDK esté cargado y el precio sea válido
    if (isSdkLoaded && totalPrice > 0 && !isButtonRendered) {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: totalPrice.toString(),
                  },
                },
              ],
            });
          },
          onApprove: async (data, actions) => {
            return actions.order.capture().then(async (details) => {
              console.log('Pago capturado exitosamente:', details);

              const orderData = {
                paypal_payment_token: data.facilitatorAccessToken,
                paypal_payment_id: data.paymentID,
                paypal_order_id: data.orderID,
                paypal_payer_id: data.payerID,
                paypal_intent: details.intent,
                paypal_return_url: details.links[0].href,
                total: totalPrice,
              };

              try {
                const response = await fetch('/api/paypal/register-order', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(orderData),
                });

                if (response.ok) {
                  window.location.href = '/success';
                } else {
                  console.error('Error al registrar la orden:', response);
                }
              } catch (err) {
                console.error('Error en la solicitud de la API:', err);
              }
            });
          },
          onError: (err) => {
            console.error('Error en el pago:', err);
            window.location.href = '/error';
          },
        })
        .render(paypalContainerRef.current);

      setIsButtonRendered(true); // Marcar el botón como renderizado
    }

    // Limpieza: remover el botón al desmontar el componente
    
  }, [isSdkLoaded, totalPrice, isButtonRendered]);

  return <div id="paypal-button-container" ref={paypalContainerRef}></div>;
};

export default PayPalCheckout;