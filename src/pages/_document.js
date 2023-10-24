import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head >
        <link href='https://fonts.googleapis.com/css?family=Lato:400,100,300' rel='stylesheet' type='text/css'/>
          <link href="https://fonts.googleapis.com/css?family=Raleway:100,400,700" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css?family=Oswald:200,400,700" rel="stylesheet"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"/>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" />
        <link href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" rel="stylesheet"  />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}