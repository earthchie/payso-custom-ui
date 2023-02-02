<script>
    let referenceNo = '900'+Math.ceil(Math.random()*10e12).toString(); // ยาว 12 หลัก กำหนดกันเองว่า เริ่มด้วย 900 = test order

    let total = (1 + Math.random()).toFixed(2);
    function formatNumber(){
        total = parseFloat(total).toFixed(2);
    }
</script>

<h1 class="uk-text-center uk-padding">Payso Custom UI Demo</h1>

<form action="/pay" method="POST">
    <div class="uk-grid uk-margin">
        <div class="uk-width-1-3@m uk-margin">
            <legend class="uk-legend">Reference Number</legend>
            <div class="uk-margin">
                <input class="uk-input" type="text" name="referenceNo" value="{referenceNo}" aria-label="Input">
            </div>
        </div>
        <div class="uk-width-1-3@m">
            <legend class="uk-legend">สินค้า</legend>
            <div class="uk-margin">
                <input class="uk-input" type="text" name="productDetail" value="หนังสือ Beginning NodeJS Programming" aria-label="Input">
            </div>
        </div>
        <div class="uk-width-1-3@m">
            <legend class="uk-legend">จำนวนเงินที่ต้องชำระ</legend>
            <div class="uk-margin">
                <input class="uk-input" type="number" name="total" aria-label="Input" step="0.01" bind:value={total} on:change={formatNumber}>
            </div>
        </div>
        <div class="uk-width-1-3@m">
            <legend class="uk-legend">อีเมลผู้ชำระเงิน</legend>
            <div class="uk-margin">
                <input class="uk-input" type="email" name="customerEmail" value="customer@email.com" aria-label="Input">
            </div>
        </div>
        <div class="uk-width-1-3@m">
            <legend class="uk-legend">ชื่อ-นามสกุล ผู้ชำระเงิน</legend>
            <div class="uk-margin">
                <input class="uk-input" type="text" name="customerName" value="ถาวร ศรีเสนพิลา" aria-label="Input">
            </div>
        </div>
    </div>
    <button class="uk-button uk-button-primary uk-button-large uk-width-1-1 uk-text-center">
        ขั้นตอนถัดไป
    </button>
</form>
