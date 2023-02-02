<script>
    export let data;
    const payment = data.payment;
    const requestData = data.requestData;
    const serializeRequestData = data.serializeRequestData;

    // time counter
    let diffNow = 0, 
        remainingMinutes = 0, 
        remainingSeconds = 0;

    $: {
        if(data && payment.status === 'success'){

            const expireAt =  new Date(payment.data.expiredate).getTime();

            let timeout = setTimeout(function(){
                diffNow = (expireAt - new Date().getTime()) / 1000;
                if(diffNow > 0){
                    remainingMinutes = Math.floor(diffNow / 60);
                    remainingSeconds = diffNow % 60;
                }else{
                    clearTimeout(timeout);
                    remainingMinutes = 0;
                    remainingSeconds = 0;
                }
            }, 1000);

        }
    }
</script>

<h1 class="uk-text-center">กรุณาชำระเงิน</h1>

{#if payment.status === 'success'}

    <div class="uk-text-center uk-alert uk-alert-success">
        <p>สร้าง Payment สำเร็จ</p>
    </div>

    <div class="uk-text-center">
        กรุณาชำระเงิน {payment.data.total} บาท

        <br>
        {#if diffNow > 0}
            เหลือเวลาอีก 
            {('0'+remainingMinutes.toFixed(0)).slice(-2)}
            :
            {('0'+remainingSeconds.toFixed(0)).slice(-2)}
            นาที
        {:else}
            <div class="uk-text-center uk-alert uk-alert-warning">
                <p>หมดเวลาชำระเงิน กรุณาย้อนกลับและทำรายการใหม่อีกครั้ง</p>
            </div>
        {/if}
        

        <div class="uk-padding-small">
            <img src="{payment.data.image}" alt="QRCode for Payment">
        </div>

        referenceNo: {payment.data.referenceNo}
    </div>
{:else}
    <div class="uk-alert uk-alert-danger">
        <p>สร้าง Payment ล้มเหลว กรุณาตรวจสอบความถูกต้องของข้อมูล และ Response ด้านล่าง</p>
        <small>(Payso ชอบ Error ไม่มีสาเหตุบ่อยๆ)</small>
    </div>
{/if}



<strong>Submitted FormData</strong>
<pre><code>{JSON.stringify(requestData, null, 4)}</code></pre>

<strong>Curl Command</strong>
<br>
<small>กรุณาใส่ <code>[AUTH_KEY]</code> เอง</small>
<pre><code>curl --location \
--request POST 'https://apis.paysolutions.asia/tep/api/v2/promptpay?{serializeRequestData}' \
--header 'Accept: application/json' \
--header 'authorization: Bearer <code>[AUTH_KEY]</code>'
</code></pre>
    


<strong>Raw Reponse from Paysolutions</strong>
<pre><code>{JSON.stringify(payment, null, 4)}</code></pre>

<div class="uk-text-center">
    <a href="/" class="uk-button uk-button-secondary">ย้อนกลับ</a>
</div>
