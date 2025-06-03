# react-shopping-cart

## 🔽 기능 요구 사항

- [x] /cart-items API를 호출하여 장바구니 상품 데이터를 불러온다.
- [x] 불러온 데이터를 기반으로 클라이언트 상태를 구성하고 관리한다.
  - [x] 개별 상품의 선택 여부, 결제 금액, 배송비 등의 상태를 관리한다.
- [x] 상품 선택에 따른 결제 금액, 배송비 등의 동적인 변경 사항을 처리한다.
  - [x] 진입 시, 전체 선택 되어 있는 것이 디폴트이다.
  - [x] 상품 선택/해제 시 결제 금액을 동적으로 변경한다.
  - [x] 결제 금액이 10만원 이상일 경우 배송비는 무료이다.
- [x] 장바구니 상품의 수량을 변경할 수 있다.
- [x] 장바구니에 담긴 상품을 제거할 수 있다.

## 🔽 컴포넌트 분리
### CartPage

![image](https://github.com/user-attachments/assets/a025ef21-ee4b-4155-a22e-5b50e4784348)

### OrderSuccessPage
![image](https://github.com/user-attachments/assets/63fd77da-38fc-4eaf-b283-941ab69f2e1d)

## 🔽 폴더 구조

```
react-shopping-cart
├─ src
│  ├─ apis                             👈 api
│  │  ├─ cartItems
│  │  │  ├─ cartItem.type.ts
│  │  │  ├─ deleteCartItem.ts
│  │  │  ├─ getCartItems.ts
│  │  │  └─ updateCartItemQuantity.ts
│  │  └─ httpClient.ts
│  ├─ pages                              👈 페이지별
│  │  ├─ cart
│  │  │  ├─ CartContent
│  │  │  │  ├─ CartList
│  │  │  │  │  ├─ CartItem
│  │  │  │  │  │  └─ Button
│  │  │  │  │  │     ├─ Quantity
│  │  │  │  │  │     └─ Remove
│  │  │  │  ├─ EmptyCartContainer
│  │  │  │  └─ PriceContainer
│  │  │  └─ hooks
│  │  │     └─ useCartItem.ts
│  │  └─ order
│  ├─ shared                              👈 프로젝트 공용 로직
│  │  ├─ components
│  │  │  ├─ BackButton
│  │  │  ├─ CheckBox
│  │  │  ├─ Header
│  │  │  └─ MobileLayout
│  │  ├─ config
│  │  │  └─ routes.ts
│  │  └─ hooks
│  │     ├─ useFetchData.ts
│  │     └─ useMutation.ts
```

