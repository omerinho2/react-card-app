import './App.css';
import Card from './Card.js';

function App() {
  return (
    <div className="wrapper">
      <Card 
      img="https://seeklogo.com/images/F/fenerbahce-spor-kulubu-5-yildizli-arma-logo-64F337AD4A-seeklogo.com.png"
      title="FENERBAHÇE"
      description="Türkiye'nin en büyük, en şerefli takımı olarak bilinmektedir ve Türk'lerin Babası Atatürk'ün Fenerbahçeli olduğu bilinmektedir "
      />
      <Card
      img="https://upload.wikimedia.org/wikipedia/commons/0/08/Be%C5%9Fikta%C5%9F_Logo_Be%C5%9Fikta%C5%9F_Amblem_Be%C5%9Fikta%C5%9F_Arma.png"
      title="beşiktaş"
      description="Ambleminde Türk bayrağı olan tek klüptür, sosyal medyada küçüklüğü ile dalga geçilir "
      />
      <Card
      img="https://www.freepnglogos.com/uploads/galatasaray-logo-png/siyah-uzerine-gs-logosu-ve-yildizar-hd-kalite-ucretsiz-indir-15.png"
      title="Galatasaray"
      description="Algı operasyonlarıyla ünlüdür, Türkiye'de şike yapması ve terör örgütleri bağlantısı bilinmektedir"
      />
    </div>
  );
}

export default App;
