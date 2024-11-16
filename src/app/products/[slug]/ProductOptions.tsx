import { Label } from "@/components/ui/label";
import { products } from "@wix/stores";

interface ProductOptionsProps {
  product: products.Product;
}

export default function ProductOptions({ product }: ProductOptionsProps) {
  return (
    <div className="space-y-3">
      {product.productOptions?.map((option) => (
        <fieldset key={option.name} className="space-y-1.7">
          <legend>
            <Label asChild>
              <span>{option.name}</span>
            </Label>
          </legend>
          <div className="flex flex-wrap items-center gap-1.5">
            {option.choices?.map((choice) => (
              <div key={choice.description}>
                <input
                  type="radio"
                  id={choice.description}
                  name={option.name}
                  value={choice.description}
                  className="peer hidden"
                />
                <Label
                  htmlFor={choice.description}
                  className="gap-1.2 flex min-w-16 cursor-pointer items-center justify-center border p-1.5 peer-checked:border-primary"
                >
                  {choice.description}
                </Label>
              </div>
            ))}
          </div>
        </fieldset>
      ))}
    </div>
  );
}
