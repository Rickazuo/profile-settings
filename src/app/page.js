import Image from 'next/image'
import styles from './page.module.css'
import Option from './components/option/option'
import ContainerOption from './components/containerOption/containerOption'
import Header from './components/header/header'

import exit from "../../public/exit.svg"
import accessibility from "../../public/accessibilty.svg"
import connectedDevices from "../../public/connectedDevices.svg"
import help from "../../public/help.svg"
import linkedAccounts from "../../public/linkedAccounts.svg"
import loginInformations from "../../public/loginInformations.svg"
import notifications from "../../public/notifications.svg"
import personalData from "../../public/personalData.svg"

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
      <Header />
      <ContainerOption
      title={"conta"}
      rows={[{image: personalData,
      description: "Dados pessoais"},{image: loginInformations,
        description: "Informações de login"}]} />
      <ContainerOption
      title={"preferências"}
      rows={[{image: notifications,
      description: "Notificações"},{image: accessibility,
        description: "Acessibilidade"}]} />
      <ContainerOption
      title={"privacidade"}
      rows={[{image: connectedDevices,
      description: "Aparelhos conectados"},{image: linkedAccounts,
        description: "Contas vinculadas"}]} />
      <ContainerOption
      rows={[{image: help,
      description: "Central de ajuda"},{image: exit,
        description: "Sair"}]} />
      </div>
    </main>
  )
}
