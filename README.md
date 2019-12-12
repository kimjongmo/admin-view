# Admin View

### Prerequisites

- node.js

- vue cli 
- [API Server](https://github.com/kimjongmo/admin)



## Project setup

```shell
git clone https://github.com/kimjongmo/admin-viewer
```

```shell
cd admin-viewer
```

```shell
npm install
```

```shell
npm run serve
```



## API Server Run

```shell
git clone https://github.com/kimjongmo/admin
```

```shell
cd admin
```

```shell
chmod +x ./gradlew
```

```shell
./gradlew build
```

```shell
java -jar admin/build/libs/admin.jar
```



## 접속

http://localhost:8080로 접속

![](/description/main_page.PNG)

![](/description/item_list.PNG)

![](/description/user_detail.PNG)

![](/description/user_detail_order_list.PNG)

![](/description/order_receipt.PNG)



## 기능

- 최초 접속시 현재 등록되어 있는 유저, 파트너사, 아이템, 주문의 총 개수를 보여줄 수 있다
- 왼쪽 사이드 메뉴의 관리 메뉴를 클릭하면 해당하는 리스트를 볼 수 있다.
- 리스트 페이징 기능
- 고객 관리 메뉴에서 리스트의 데이터를 클릭할 시 해당하는 유저의 상세 정보 페이지로 넘어간다
- 유저 상세 정보 페이지 -> 주문 내역의 리스트를 클릭할 시 해당하는 주문의 상세 내역(영수증)을 볼 수 있다.