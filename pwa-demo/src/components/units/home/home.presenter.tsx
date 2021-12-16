import {
  Wrapper,
  Head,
  Body,
  Body_Head,
  EmailBox,
  EmailHead,
  EmailBody,
} from "./home.styles";
import emailjs from "emailjs-com";
import { useRef } from "react";
export default function HomeUI() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wwxpg9o",
        "template_9jgwop1",
        e.target,
        "user_jpanIlQa9WoviTZZHASi2",
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };
  return (
    <>
      <Wrapper>
        <Head>PWA</Head>
        <Body>
          <Body_Head>
            <EmailBox>
              <form ref={form} onSubmit={sendEmail}>
                <EmailHead>Email 보내기</EmailHead>
                <EmailBody>
                  <ul>
                    <li>
                      name:
                      <textarea name="name" />
                    </li>
                    <li>
                      email:
                      <textarea name="email" />
                    </li>
                    <li>
                      title:
                      <textarea name="title" />
                    </li>
                    <li>
                      message:
                      <textarea name="message" />
                    </li>
                  </ul>
                  <input type="submit" value="Send" />
                </EmailBody>
              </form>
            </EmailBox>
          </Body_Head>
        </Body>
      </Wrapper>
    </>
  );
}
