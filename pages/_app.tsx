import React from "react";
import type { AppProps } from "next/app";
import "../styles/index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { store } from "../store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = React.useState(
    () => new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false } } })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {/* react query가 제공하는 하단 Hydrate 컴포넌트는 서버 사이드 렌더링을 활용할 경우에만 적용한다.*/}
        {/* <Hydrate state={pageProps.dehydratedState}> */}
        <Component {...pageProps} />
        {/* </Hydrate> */}
      </Provider>
    </QueryClientProvider>
  );
};

export default MyApp;
