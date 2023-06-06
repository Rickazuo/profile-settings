"use client";
import styles from "./page.module.css";
import Option from "./components/option/option";
import ContainerOption from "./components/containerOption/containerOption";
import Header from "./components/header/header";

import exit from "../../public/exit.svg";
import accessibility from "../../public/accessibilty.svg";
import connectedDevices from "../../public/connectedDevices.svg";
import help from "../../public/help.svg";
import linkedAccounts from "../../public/linkedAccounts.svg";
import loginInformations from "../../public/loginInformations.svg";
import notifications from "../../public/notifications.svg";
import personalData from "../../public/personalData.svg";
import { useState } from "react";

export default function Home() {
    const [actualIndex, setActualIndex] = useState(-1);

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <Header />
                <ContainerOption
                    actualIndex={actualIndex}
                    setActualIndex={setActualIndex}
                    title={"conta"}
                    rows={[
                        {
                            image: personalData,
                            description: "Dados pessoais",
                            id: 1,
                        },
                        {
                            image: loginInformations,
                            description: "Informações de login",
                            id: 2,
                        },
                    ]}
                />
                <ContainerOption
                    actualIndex={actualIndex}
                    setActualIndex={setActualIndex}
                    title={"preferências"}
                    rows={[
                        {
                            image: notifications,
                            description: "Notificações",
                            id: 3,
                        },
                        {
                            image: accessibility,
                            description: "Acessibilidade",
                            id: 4,
                        },
                    ]}
                />
                <ContainerOption
                    actualIndex={actualIndex}
                    setActualIndex={setActualIndex}
                    title={"privacidade"}
                    rows={[
                        {
                            image: connectedDevices,
                            description: "Aparelhos conectados",
                            id: 5,
                        },
                        {
                            image: linkedAccounts,
                            description: "Contas vinculadas",
                            id: 6,
                        },
                    ]}
                />
                <ContainerOption
                    rows={[
                        { image: help, description: "Central de ajuda", id: 7 },
                        { image: exit, description: "Sair", id: 8 },
                    ]}
                />
            </div>
        </main>
    );
}
