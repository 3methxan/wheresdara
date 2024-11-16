import { products } from "@wix/stores";
import Badge from "./ui/badge";

interface SaleMarkProps {
    data: products.Discount;
}

export default function SaleMark({data}: SaleMarkProps) {
    if (data.type !== "PERCENT") {
        return null;
    }
    return <Badge>-{data.value}%</Badge>
}