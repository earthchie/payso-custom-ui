let payment;
let requestData;
let serializeRequestData;

export async function load() {
    return {payment, requestData, serializeRequestData};
};

export const actions = {
  default: async ({fetch, request}) => {
    const formData = await request.formData();

    const serialize = obj => {
        return Object.keys(obj).map(k=>{
            return k+'='+encodeURIComponent(obj[k])
        }).join('&')
    }
    const params = {
      merchantID: process.env.PAYSO_MERCHANT_ID,
      productDetail: formData.get('productDetail'),
      customerEmail: formData.get('customerEmail'),
      customerName: formData.get('customerName'),
      total: formData.get('total'),
      referenceNo: formData.get('referenceNo')
    };
    console.log(params);

    const req =  await fetch('https://apis.paysolutions.asia/tep/api/v2/promptpay?'+serialize(params), {
      method: 'POST',
      headers: {
        accept: 'application/json',
        authorization: 'Bearer ' + process.env.PAYSO_AUTH_KEY
      }
    });

    // export back to ./src/pay/+page.svelte
    requestData = params; // data.requestData
    serializeRequestData = serialize(params); // data.serializeRequestData
    payment = await req.json(); // data.payment

    console.log(payment);

  }
};

