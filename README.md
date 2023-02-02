# Paysolutions Custom UI Demo

โปรเจคนี้เขียนด้วย [SveltKit3](https://kit.svelte.dev/) สำหรับคนที่ไม่เคยเขียน หลักๆ ให้ดู 

1. ไฟล์ `./src/app.html` คือไฟล์ html หลัก ใส่ header, body ตรงนี้

2. ไฟล์ `./src/routes/+page.svelte` คือหน้าแรกของโปรเจค ในกรณีนี้เป็นโค้ดที่เกี่ยวข้องกับฟอร์มการชำระเงินทั้งหมด

3. ไฟล์ `./src/routes/pay/+page.svelte` เป็น html ของหน้าหลังจากกดส่งฟอร์มแล้ว (หน้าชำระเงิน) ซึ่งจะแสดงผลโดยใช้ข้อมูลจาก `./src/routes/pay/+page.server.js`

4. ไฟล์ `./src/routes/pay/+page.server.js` คือไฟล์ที่รับ form data จากหน้าแรก (จาก `./src/routes/+page.svelte`) นำไป api request ยิงไปหา payso เพื่อขอ QRCode สำหรับชำระเงิน ส่วนของ API Response จะส่งกลับไปแสดงผลที่ `./src/routes/pay/+page.svelte`

# วิธีรันโปรเจค

ลง nodejs ให้เรียบร้อย

```
git clone https://github.com/earthchie/payso-custom-ui.git
cd payso-custom-ui
npm install
```

จากนั้น copy ไฟล์ env แล้วใส่ payso merchant id กับ auth token ลงไปด้วย

```
cp .env.example .env
nano .env
```

เสร็จแล้วรันได้

```
npm run dev -- --open
```

มันจะเปิด browser ขึ้นมาให้อัตโนมัติ

-----

# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
