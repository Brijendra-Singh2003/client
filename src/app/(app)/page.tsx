import Collection from "@/components/collection";
import App from "@/components/swiper";
import { Suspense } from "react";
import { headers } from 'next/headers';

export default function Home() {

  const isMobile: boolean = headers().get('user-agent')?.match(
    '/Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i'
  ) ? true : false;

  return (
    <main>
      <section className="">
        <Suspense fallback={<div className="w-full aspect-[15/7] bg-gray-500 animate-pulse"></div>}>
          <App isMobile={isMobile} items={images} />
        </Suspense>
      </section>
      <Collection collection={collections[0]} />
      <Collection collection={collections[1]} />
    </main>
  );
}

const images = [
  {
    id: 71,
    lg: "https://rukminim2.flixcart.com/fk-p-flap/2048/2048/image/1055923499e1913f.jpg",
    mb: "https://rukminim2.flixcart.com/fk-p-flap/1024/1024/image/69ee89c0569e757c.jpg"
  },
  {
    id: 871,
    lg: "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7f4da0f887732f8e.jpg",
    mb: "https://rukminim2.flixcart.com/fk-p-flap/1450/650/image/78980b9e33c47fc6.jpg"
  },
]

const collections: collection[] = [
  {
    title: "Top wear",
    items: [
      {
        id: "1",
        name: "Men Printed Round Neck Cotton Blend Maroon, White T-Shirt",
        price: 1499,
        discount: 1499 - 279,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/z/y/s/xl-ausk0569-ausk-original-imagt4rgfphkvpqb.jpeg"
      },
      {
        id: "2",
        name: "Men Checkered Polo Neck Cotton Blend Maroon, White T-Shirt",
        price: 1499,
        discount: 1499 - 279,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/8/b/7/s-ausk0579-ausk-original-imagt4sybykk4ugw.jpeg"
      },
      {
        id: "3",
        name: "Men Regular Fit Solid Spread Collar Casual Shirt",
        price: 1499,
        discount: 1499 - 389,
        image: "https://rukminim2.flixcart.com/image/612/612/kzn17680/shirt/0/q/o/l-logo-shirt-infinity-choice-original-imagbhwczbphzk5f.jpeg?q=70"
      },
      {
        id: "4",
        name: "Men Printed Round Neck Cotton Blend Maroon, White T-Shirt",
        price: 1499,
        discount: 1499 - 279,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/z/y/s/xl-ausk0569-ausk-original-imagt4rgfphkvpqb.jpeg"
      },
      {
        id: "5",
        name: "Men Checkered Polo Neck Cotton Blend Maroon, White T-Shirt",
        price: 1499,
        discount: 1499 - 279,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/8/b/7/s-ausk0579-ausk-original-imagt4sybykk4ugw.jpeg"
      },
      {
        id: "6",
        name: "Men Regular Fit Solid Spread Collar Casual Shirt",
        price: 1499,
        discount: 1499 - 389,
        image: "https://rukminim2.flixcart.com/image/612/612/kzn17680/shirt/0/q/o/l-logo-shirt-infinity-choice-original-imagbhwczbphzk5f.jpeg?q=70"
      },
      {
        id: "7",
        name: "Men Printed Round Neck Cotton Blend Maroon, White T-Shirt",
        price: 1499,
        discount: 1499 - 279,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/z/y/s/xl-ausk0569-ausk-original-imagt4rgfphkvpqb.jpeg"
      },
      {
        id: "8",
        name: "Men Checkered Polo Neck Cotton Blend Maroon, White T-Shirt",
        price: 1499,
        discount: 1499 - 279,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/8/b/7/s-ausk0579-ausk-original-imagt4sybykk4ugw.jpeg"
      },
      {
        id: "9",
        name: "Men Regular Fit Solid Spread Collar Casual Shirt",
        price: 1499,
        discount: 1499 - 389,
        image: "https://rukminim2.flixcart.com/image/612/612/kzn17680/shirt/0/q/o/l-logo-shirt-infinity-choice-original-imagbhwczbphzk5f.jpeg?q=70"
      },
    ]
  },
  {
    title: "Bottom wear",
    items: [
      {
        id: "mttksut",
        name: "Men Cargos",
        price: 999,
        discount: 999 - 378,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/cargo/l/n/k/28-mb-josh-original-imag3av8tyx8rkgd-bb.jpeg"
      },
      {
        id: "kjvh",
        name: "Men Solid Gray Track Pants",
        price: 999,
        discount: 999 - 424,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-track-pant/g/h/t/xxl-ss-vs-sgl-zurich-addiz-original-imagw8ynrxdrspgz.jpeg"
      },
      {
        id: "lbwe",
        name: "Men Striped Blue Track Pants",
        price: 999,
        discount: 999 - 349,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/d/g/c/m-833-4-ftx-original-imagt6ygygr5fayg.jpeg"
      },
      {
        id: "oug3qr",
        name: "Men Cargos",
        price: 999,
        discount: 999 - 378,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/cargo/l/n/k/28-mb-josh-original-imag3av8tyx8rkgd-bb.jpeg"
      },
      {
        id: "vluwqk2",
        name: "Men Solid Gray Track Pants",
        price: 999,
        discount: 999 - 424,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-track-pant/g/h/t/xxl-ss-vs-sgl-zurich-addiz-original-imagw8ynrxdrspgz.jpeg"
      },
      {
        id: "vloewha4",
        name: "Men Striped Blue Track Pants",
        price: 999,
        discount: 999 - 349,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/d/g/c/m-833-4-ftx-original-imagt6ygygr5fayg.jpeg"
      },
      {
        id: "f4i3lae98",
        name: "Men Cargos",
        price: 999,
        discount: 999 - 378,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/cargo/l/n/k/28-mb-josh-original-imag3av8tyx8rkgd-bb.jpeg"
      },
      {
        id: "iygefiq",
        name: "Men Solid Gray Track Pants",
        price: 999,
        discount: 999 - 424,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-track-pant/g/h/t/xxl-ss-vs-sgl-zurich-addiz-original-imagw8ynrxdrspgz.jpeg"
      },
      {
        id: "skeroiow",
        name: "Men Striped Blue Track Pants",
        price: 999,
        discount: 999 - 349,
        image: "https://rukminim2.flixcart.com/image/612/612/xif0q/track-pant/d/g/c/m-833-4-ftx-original-imagt6ygygr5fayg.jpeg"
      },
    ]
  }

]

//https://rukminim2.flixcart.com/image/210/210/kx50g…/119766-flair-original-imag9nzubznagufg.jpeg?q=80