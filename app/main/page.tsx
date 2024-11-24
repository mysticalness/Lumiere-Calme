import styles from "../../styles/main.module.css";
import Image from 'next/image';

export default function Main() {

    const images = [
        {
            src: "/gallery/mine01.jpeg", // public 폴더 기준으로 경로 수정
            alt: "mine01"
        },
        {
            src: "/gallery/mine02.jpeg", // public 폴더 기준으로 경로 수정
            alt: "mine01"
        },
        {
            src: "/gallery/mine03.jpeg", // public 폴더 기준으로 경로 수정
            alt: "mine01"
        },
        {
            src: "/gallery/mine04.jpeg", // public 폴더 기준으로 경로 수정
            alt: "mine01"
        },
        {
            src: "/gallery/mine05.jpeg", // public 폴더 기준으로 경로 수정
            alt: "mine01"
        },
        {
            src: "/gallery/mine06.jpeg", // public 폴더 기준으로 경로 수정
            alt: "mine01"
        },
                {
            src: "/gallery/mine07.jpeg", // public 폴더 기준으로 경로 수정
            alt: "mine01"
        },
        {
            src: "/gallery/mine08.jpeg", // public 폴더 기준으로 경로 수정
            alt: "mine01"
        },
        {
            src: "/gallery/mine09.jpeg", // public 폴더 기준으로 경로 수정
            alt: "mine01"
        },
        {
            src: "/gallery/mine10.jpeg", // public 폴더 기준으로 경로 수정
            alt: "mine01"
        },
        {
            src: "/gallery/mine11.jpeg", // public 폴더 기준으로 경로 수정
            alt: "mine01"
        },
        {
            src: "/gallery/mine12.jpeg", // public 폴더 기준으로 경로 수정
            alt: "mine01"
        },
        {
            src: "/gallery/mine13.jpeg", // public 폴더 기준으로 경로 수정
            alt: "mine01"
        },
        {
            src: "/gallery/mine14.jpeg", // public 폴더 기준으로 경로 수정
            alt: "mine01"
        },
        {
            src: "/gallery/mine15.png", // public 폴더 기준으로 경로 수정
            alt: "mine01"
        },
    ];

    return (
        <div className={styles.container}>
            {
                images.map((image,index)=> (
                    <div key={index} >
                        <img className={styles.galleryImg}
                            src={image.src}
                            alt={image.alt}
                        />
                    </div>
                ))
            }
        </div>
    )
}