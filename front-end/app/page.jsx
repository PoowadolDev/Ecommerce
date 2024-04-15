import Image from "next/image";

export default function Home() {

  return (
      <main className="h-auto w-auto my-10 mx-72">
        <div className="grid gap-5 grid-cols-9 justify-center">
          <div className="col-span-2">
            <div className="grid gap-2 grid-rows-3">
              <div className="relative object-fill row-span-2 mb-3">
                <div className="h-64">
                  <Image
                  src="/images/banners/banner-1.jpg"
                  fill={true}
                  alt="banner"/>
                </div>
              </div>

              <div className="relative object-fill">
                <div className="h-20">
                  <Image
                  src="/images/banners/banner-5.jpg"
                  fill={true}
                  alt="banner"/>
                </div>
              </div>
            </div>
          </div>

                <div className="carousel w-full col-span-5 ">
                  <div id="slide1" className="carousel-item relative w-full">
                    <Image
                      src="/images/banners/banner-3.jpg"
                      fill={true}
                      alt="1"/>
                    <div className="absolute flex justify-between left-5 right-5 top-1/2">
                      <a href="#slide2" className="btn btn-circle">❮</a> 
                      <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                  </div>
                  <div id="slide2" className="carousel-item relative w-full">
                    <Image
                      src="/images/banners/banner-4.jpg"
                      fill={true}
                      alt="1"/>
                    <div className="absolute flex justify-between  left-5 right-5 top-1/2">
                      <a href="#slide1" className="btn btn-circle">❮</a> 
                      <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                  </div>
                </div>

        <div className="col-span-2">
          <div className="grid gap-2 grid-rows-3">
            <div className="relative object-fill row-span-2 mb-3">
              <div className="h-64">
                <Image
                src="/images/banners/banner-2.jpg"
                fill={true}
                alt="banner"/>
              </div>
            </div>

            <div className="relative object-fill">
              <div className="h-20">
                <Image
                src="/images/banners/banner-6.jpg"
                fill={true}
                alt="banner"/>
              </div>
            </div>
          </div>
        </div>
        </div>
      </main>
  );
}
