import { AsyncImage } from "loadable-image";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const dataContent = [
  {
    image: "./HoChiMinh.png",
    name: "Chủ tịch Hồ Chí Minh",
    information: "Vị lãnh tụ vĩ đại của Việt Nam",
    description:
      "“Muốn học tập có kết quả tốt thì phải có thái độ đúng và phương pháp đúng.”",
  },
  {
    image: "./WaltDisney.png",
    name: "Walt Disney",
    information: "Doanh nhân người Mỹ",
    description: "“Một cách để bắt đầu là ngưng nói và bắt tay vào làm.”",
  },
  {
    image: "./LouisaMayAlcott.png",
    name: "Louisa May Alcott",
    information: "Tiểu thuyết gia, nhà văn người Mỹ",
    description: "“Luôn luôn có ánh sáng đằng sau những đám mây.”",
  },
];
export default function ContentHome3() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="flex flex-col items-center gap-y-10">
      <div className="flex justify-center items-center text-center w-[350px] h-[50px] text-3xl font-serif bg-[#ffe0b2] text-[#16a34a] rounded-full shadow-md">
        Quote tạo động lực học
      </div>
      <Carousel setApi={setApi}>
        <CarouselContent className="w-[500px]">
          {dataContent.map((item, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex flex-col bg-[#9dc46a] gap-10 py-6 h-[180px] text-white rounded-xl shadow-md">
                  <div className="h-10">{item.description}</div>
                  <div className="flex gap-5 ">
                    <AsyncImage
                      src={item.image}
                      className="size-14 rounded-full"
                    />
                    <div>
                      <div className="font-extrabold">{item.name}</div>
                      <div className="font-thin">{item.information}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="py-2 flex gap-2 justify-center">
        {Array.from({ length: count }).map((_, index) => (
          <div
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "size-[10px] rounded-full",
              current == index + 1 ? "bg-[#9dc46a]" : "bg-white"
            )}
          ></div>
        ))}
      </div>
    </div>
  );
}
