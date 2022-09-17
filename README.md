# 코인정보 제공 사이트 캣코인

### 배포 URL : https://alstjr5949.github.io/coin-info-site/

업비트 오픈 API를 사용해 다양한 코인의 시세정보를 제공해주는 사이트입니다.

## 1. Preview

---

### 더보기 버튼

- Coin 리스트를 담고 있는 보드에 overflow-y 값을 hidden으로 주었습니다.
- board의 height 값을 props로 받아서 사용하고, 더보기 버튼을 누르면 height state를 업데이트 해줬습니다.
- 또한 일정 수준의 코인정보를 보여주게 되면 줄이기 버튼을 통해 처음 상태로 돌아갈 수 있게 구현했습니다.

| 더보기 버튼 |  
| :-----------------------------------------------:
| ![더보기 버튼 시현 영상](https://im4.ezgif.com/tmp/ezgif-4-2e1e7cfd86.gif) |

---

<br/>

### 다크모드 라이트모드 버튼

- Recoil 전역상태관리 툴을 사용하여 다크모드, 라이트모드 버튼을 만들었습니다.
- 다크모드, 라이트모드의 색상은 theme.ts, styled.d.ts 파일로 관리했습니다.

| 다크모드, 라이트모드 버튼 |  
| :-----------------------------------------------:
| ![다크모드 라이트모드 버튼 시현 영상](https://im4.ezgif.com/tmp/ezgif-4-d970078b4c.gif) |

### 코인 시세 캔들 차트

- ApexChart를 사용해 업비트의 OHLCV data를 시각화 했습니다.
- Chart 역시 다크모드와 라이트모드에 맞게 테마가 변경되게 구현했습니다.
- 데이터가 실시간으로 반영되는 것처럼 보이기 위해 가격 데이터는 refetchInterval을 사용해 1초마다 데이터를 받아오게 했습니다.

| 코인 시세 캔들 차트 |  
| :-----------------------------------------------:
| ![데이터 시각화](https://im.ezgif.com/tmp/ezgif-1-b992456dc9.gif) |

## 2. 사용기술

[기술]

- React
- TypeScript
- Styled-Component
- Recoil
- React Query

## 3. 개발일정

기간 : 2022.09.04 ~ 2022. 09. 16 (12일)

## 4. 개발하며 힘들었던 점

- 처음에는 coinpaprika의 오픈 api를 사용해 개발을 하려했습니다. 어느 정도 개발을 하고 나서 보니, coinpaprika의 ohlcv data는 유료로 사용해야 했습니다. 그래서 다른 코인 open api를 찾아보던 중 두나무에서 운영중인 업비트에서 open api가 있다는 것을 알게 되었고, 프로젝트 중간에 api를 업비트로 바꾸게 되었습니다. 이 때 interface를 다시 재설정해줘야 했고, 기존 coinpaprika의 api response와는 다른 형태가 몇개 존재해서 type 설정이 조금 힘들었던 것 같습니다.
  <br/>
- 확대를하더라도 깨짐이 없는 이미지를 보기 위해 사용한 아이콘들의 이미지를 svg를 사용해서 개발을 했습니다. 개발 초기에는 그렇게 큰 문제는 없었지만 다크모드, 라이트모드 버튼을 개발하면서 문제가 생겼습니다. svg의 색을 바꾸려면 fill의 색상이나 stroke의 색상을 바꿔줬어야 했는데, 이게 쉽지 않았습니다. 그래서 따로 Logo, ArrowIcon과 같이 컴포넌트로 분리해 recoil의 atom 값에 따라 색상이 바뀌게 개발하였습니다.
  <br/>
- React Query를 사용해 비동기 데이터를 관리했는데, React Query의 useQuery 훅의 기능인 refetchInterval을 사용함에 있어 처음 한 페이지 컴포넌트에 다 개발을 했을 때에는 불필요한 리렌더링 즉, Coin 페이지에 있는 모든 것들이 리렌더링 되면서 성능 이슈가 발생하였습니다.<br/> 따라서 리렌더링 문제를 해결하기 위해 첫번째로 시도해 본 것은 staleTime과 cacheTime을 설정해 준 것이었습니다. 하지만 이는 제가 원하는 결과를 이끌어내지 못했습니다. <br/>그래서 두번째로 시도해 본 것은 컴포넌트를 분리하는 것이었습니다. 컴포넌트를 분리하고, 분리한 컴포넌트 내부에서 refetchInterval을 사용해 데이터를 refetch 하면서 관심사를 분리해 주었습니다. 따라서 가격부분만 리렌더링이 일어나고 다른 부분은 리렌더링이 일어나지 않게 했습니다.
  <br/>

## 5. 이후 개발방향

- 현재 market, coin candle chart 페이지 밖에 없지만 추후에 블록체인 관련기사들을 크롤링해서 보여주는 페이지 또한 만들고 싶습니다.
  <br/>
- 현재 반응형 CSS 작업을 하지 않은 상태입니다. 이는 빠른 시일내로 반응형 디자인을 완성할 예정입니다.
  <br/>
- 불필요한 리렌더링을 막기 위해, 성능 개선을 하기 위해 useMemo, useCallBack 등 다양한 훅들을 사용해 보고 싶습니다.
  <br/>
- React Hook Form을 사용해 로그인, 회원가입 기능을 구현한 뒤 로그인 상태에 따라 다른 페이지를 보여주고 싶습니다.
  <br/>
- Loading 페이지 구현을 할 예정입니다.
