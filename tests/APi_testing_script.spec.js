import { test, expect } from '@playwright/test';

let token;
let booking_id;

test.beforeAll(async ({ request }) => {
  // Get token
  const authRes = await request.post('https://restful-booker.herokuapp.com/auth', {
    data: { username: "admin", password: "password123" },
    headers: { "Content-Type": "application/json" }
  });
  token = (await authRes.json()).token;

  // Create booking
  const createRes = await request.post('https://restful-booker.herokuapp.com/booking', {
    data: {
      firstname: "Jim",
      lastname: "Brown",
      totalprice: 111,
      depositpaid: true,
      bookingdates: { checkin: "2018-01-01", checkout: "2019-01-01" },
      additionalneeds: "Breakfast"
    },
    headers: { "Content-Type": "application/json" }
  });
  booking_id = (await createRes.json()).bookingid;
  console.log('Booking ID created for test:', booking_id);
});

test('Read Booking', async ({ request }) => {
  const res = await request.get(`https://restful-booker.herokuapp.com/booking/${booking_id}`);
  expect(res.status()).toBe(200);
  console.log(await res.json());
});

test('Update Booking', async ({ request }) => {
  const res = await request.put(`https://restful-booker.herokuapp.com/booking/${booking_id}`, {
    data: {
      firstname: "Aman",
      lastname: "Brown",
      totalprice: 111,
      depositpaid: true,
      bookingdates: { checkin: "2025-08-13", checkout: "2020-01-01" },
      additionalneeds: "Dinner"
    },
    headers: {
      "Content-Type": "application/json",
      "Cookie": `token=${token}`
    }
  });
  expect(res.status()).toBe(200);
});
