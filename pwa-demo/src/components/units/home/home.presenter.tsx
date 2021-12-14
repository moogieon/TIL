import {
  Wrapper,
  Head,
  Body,
  Body_Head,
  EmailBox,
  EmailHead,
  EmailBody,
} from "./home.styles";

export default function HomeUI() {
  return (
    <>
      <Wrapper>
        <Head>PWA</Head>
        <Body>
          <Body_Head>
            <EmailBox>
              <EmailHead>Email 보내기</EmailHead>
              <EmailBody>
                <ul>
                  <li>
                    name:
                    <textarea />
                  </li>
                  <li>
                    email:
                    <textarea />
                  </li>
                </ul>
              </EmailBody>
            </EmailBox>
          </Body_Head>
        </Body>
      </Wrapper>
    </>
  );
}
