import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CarIcon, ShoppingBag, Star } from "lucide-react";
import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="flex">
      <Card className="w-48 h-72 md:w-80  md:h-96 rounded-3xl">
        <CardHeader className="w-full h-[50%] md:h-[50%]  rounded-t-3xl">
          <div className="relative w-full h-full">
            <Image
              src="/placeholder.jpg"
              alt="Featured Product"
              objectFit="cover"
              fill="fit"
              className="rounded-t-3xl justify-center"
            />
          </div>
        </CardHeader>
        <CardFooter className="text-primary flex flex-col max-sm:gap-1 max-sm:mt-2 gap-3 mt-3">
          <div className="flex flex-col gap-2 w-full justify-start">
            <h1 className="text-md md:text-lg">
              Name of the <br /> Product
            </h1>
            <span className="text-md md:text-2xl border-primary rounded-sm border p-1 w-fit">
              20$
            </span>
          </div>
          <div className="w-full flex justify-between items-center ">
            <div className="flex">
              <Star size="16" className="text-primary" />
              <Star size="16" className="text-primary" />
              <Star size="16" className="text-primary" />
              <Star size="16" className="text-primary" />
              <Star size="16" className="text-black" />
            </div>
            <div>
              <Button>
                <ShoppingBag size="24" className="" />
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
