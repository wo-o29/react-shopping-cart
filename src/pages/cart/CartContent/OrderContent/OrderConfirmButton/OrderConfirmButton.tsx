import * as S from "./OrderConfirmButton.styled";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/shared/config/routes";
import { CartItemType } from "@/apis/cartItems/cartItem.type";
import { getDeliveryPrice } from "@/domains/utils/getDeliveryPrice";

type OrderConfirmButton = {
  orderList: CartItemType[];
  orderTotalPrice: number;
};

export default function OrderConfirmButton({
  orderList,
  orderTotalPrice,
}: OrderConfirmButton) {
  const navigate = useNavigate();
  const handleOrderConfirmButtonClick = () => {
    navigate(ROUTES.ORDER_SUCCESS, {
      state: {
        orderList,
        paymentPrice: orderTotalPrice + getDeliveryPrice(orderTotalPrice),
      },
    });
  };

  return (
    <S.OrderConfirmButton
      type="button"
      onClick={handleOrderConfirmButtonClick}
      disabled={!orderList.length}
    >
      주문 확인
    </S.OrderConfirmButton>
  );
}
