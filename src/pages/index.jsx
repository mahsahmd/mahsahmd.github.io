import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>mahsa ahmadpour</h1>
        <section>
          <h3>Contact Me</h3>
          <p><span>mail:</span>mahsa.hmd1@gmail.com</p>
          <p><span>location:</span>Tehran,Iran</p>
        </section>
        <section>
          <h3>Profile Summary</h3>
          <p>My name is Mahsa Ahmadpour and I am a React developer with over 2 years of experience. I possess a strong
            ability to quickly learn and adapt to new technologies, making me a valuable asset to any team. I am dedicated to
            delivering high-quality solutions to complex problems, and I thrive in team settings where I can continuously
            learn and grow. beside coding I enjoy going on walks with my dog, reading, and staying active through regular
            exercise.
          </p>
        </section>
        <section>
          <h3>Education</h3>
          <ul>
            <li>Bachelor in computer engineering</li>
            <li>Branch: tehran north</li>
            <li>Institute/University: Islamic Azad University</li>
            <li>Iran</li>
            <li>2014 - 2019</li>
          </ul>
        </section>
        <section>
          <h3>Work Experience</h3>
          <ul>
            <li>Front-End Developer</li>
            <li>hami holding</li>
            <li>Tehran, Iran</li>
            <li>Since August 2021</li>
            <ul>
              Tasks and Achievements
              <li>
                Develop a responsive, user-friendly
                cryptocurrency exchange website using React,
                MobX, GraphQL, REST, Tailwind, and styledcomponents
              </li>
              <li>
                Develop an admin panel for managing users and
                information using React, Mobx, GraphQl
                Work in an agile and collaborative environment
              </li>
              <li>
                Collaborating with the back-end team to ensure
                seamless integration of the front-end with the
                back-end system.
              </li>
              <li>
                Optimizing load times and improving page speed
                for a better user experience
              </li>
            </ul>
          </ul>
          <ul>
            <ul>
              <li>Front-End Developer</li>
              <li>TRAAP</li>
              <li>Tehran, Iran</li>
              <li>May 2021 - June 2021</li>
              <ul>
                Tasks and Achievements
                <li>
                  Improve knowledge of JavaScript, React, and
                  Redux
                </li>
                <li>
                  Implement a login page using React and Formik
                </li>
              </ul>
            </ul>

          </ul>

        </section>
        <section>
          <h3>Skills</h3>
          <ul>
            <li>css3</li>
            <li>html</li>
            <li>javascript</li>
            <li>React</li>
            <li>mobx</li>
            <li>GraphQl</li>
            <li>sass</li>
            <li>jest</li>
            <li>restful apis</li>
            <li>typescript</li>
            <li>styled-components</li>
            <li>tailwind</li>
            <li>next</li>


          </ul>
        </section>
        <section>
          <h3>Language</h3>
          <p>English : Intermediate</p>
          <p>German : Elementary</p>

        </section>
        <section>
          <h3>Certificates</h3>
          <p>web design-client side</p>
          <p>Institute: laitec</p>
          <p>November 2019</p>
        </section>
        <section>
          <h3>Social Media</h3>
          <a href="https://linkedin.com/in/mahsa-ahmadpour-ba32b4196/">linkedin</a>
          <a href="https://github.com/mahsahmd">github</a>
        </section>
      </main >
    </>
  )
}