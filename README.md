# CLI Weather App 🌦️

Bu terminalda ishlaydigan ob-havo dasturi bo'lib, ob-havo ma'lumotlarini ko'rsatadi. Siz shunchaki kerakli shaharni kiritasiz va dastur ob-havoni ko'rsatib beradi.

## Xususiyatlar

- Ob-havo ma'lumotlarini olish
- Shaharni saqlash
- API tokenlarini boshqarish
- Foydalanish uchun sodda CLI interfeys

---

## O'rnatish

1. **Loyihani yuklab olish yoki klonlash:**

   ```bash
   git clone https://github.com/qAbdullajon/weather-cli.git
   cd weather-cli
   ```

2. **Kerakli paketlarni o'rnatish:**
   Node.js o'rnatilgan bo'lishi kerak:
   ```bash
   npm install
   ```

---

## API kalitini sozlash

Ushbu dastur OpenWeatherMap API'sidan foydalanadi. API kalitini olish uchun quyidagi qadamlarni bajaring:

1. [OpenWeatherMap](https://openweathermap.org/api) veb-saytiga kiring.
2. Ro'yxatdan o'ting va API kalitingizni oling.
3. Terminal orqali API kalitni saqlang:
   ```bash
   node index.js -t YOUR_API_KEY
   ```

---

## Foydalanish

1. **Yordam olish:**
   Yordam ma'lumotlarini ko'rish uchun quyidagilarni kiriting:

   ```bash
   node index.js -h

   // HELP
   // -s [CITY] for install city
   // -h for help
   // -t [API_KEY] for saving token
   ```

2. **Shaharni saqlash:**
   Default shaharni o'rnatish uchun:

   ```bash
   node index.js -s "Shahar nomi"
   ```

3. **Ob-havo ma'lumotlarini olish:**
   Shunchaki dastur ishga tushiring:

   ```bash
   node index.js

   // Weather City weather Egypt
   // ⛅  few clouds
   // Temperature: -2.59 (feels like: -7.15)
   // Temperature: -2.59 (feels like: -7.15)
   // Humidity: 62%
   // Wind speed: 3.6
   ```

---

## Xatolarni tuzatish

1. **404 xatosi (Shahar topilmadi):**

   - Kiritilgan shahar nomi noto'g'ri bo'lishi mumkin. Shahar nomini to'g'ri kiritganingizga ishonch hosil qiling.

2. **401 xatosi (API kaliti noto'g'ri):**
   - API kalitni to'g'ri kiritganingizga ishonch hosil qiling:
     ```bash
     node index.js -t YOUR_API_KEY
     ```

---

## Texnologiyalar

- Node.js
- OpenWeatherMap API
- CLI interfeys

---

## Muallif

**Ismingiz**  
GitHub: [qAbdullajon](https://github.com/qAbdullajon)  
Email: abdullajonq6@gmail.com

---

## Test uchun token

```bash
0b3c272326d5b8b8585fd7315b1cce5e
```
