import { CartItemType } from "@/apis/cartItems/cartItem.type";
import * as S from "./OrderItem.styled";
import ProductImage from "@/shared/components/ProductImage/ProductImage";

type OrderItemProps = {
  cartItem: CartItemType;
};

export default function OrderItem({ cartItem }: OrderItemProps) {
  const { quantity, product } = cartItem;
  const { name, price, imageUrl } = product;

  return (
    <S.Item>
      <S.ItemContent>
        <ProductImage imageUrl={imageUrl} name={name} />
        <S.ItemDetail>
          <S.ItemDetailInfo>
            <S.ItemName>{name}</S.ItemName>
            <S.ItemPrice>{price.toLocaleString()}원</S.ItemPrice>
          </S.ItemDetailInfo>
          <S.ItemQuantityText>{quantity}개</S.ItemQuantityText>
        </S.ItemDetail>
      </S.ItemContent>
    </S.Item>
  );
}
