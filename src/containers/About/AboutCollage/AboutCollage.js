import React, { Component, PropTypes } from 'react';

import {Card, CardHeader, CardText, CardMedia} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

import {setTitle} from '../../../redux/modules/appBar';
import {connect} from 'react-redux';

@connect(
   state => ({
     user: state.auth.user
   }),
   {setTitle})
export default class AboutCollage extends Component {
  static propTypes = {
    setTitle: PropTypes.func
  };
  componentDidMount() {
    this.props.setTitle('О Колледже');
  }
  render() {
    const kabinet306 = require('./306.jpg');
    const kabinet207 = require('./207.jpg');
    const petrovSmall = require('./petrov_small.jpg');
    return (
       <Card>
         <CardHeader
            title="О Колледже"
         />
         <Divider />
         <CardMedia>
           <iframe height="300px" src="https://www.youtube.com/embed/6xHMgn9PLWg" />
         </CardMedia>
         <CardText>
           В Ставрополе на проспекте Карла Маркса 75 в здании бывшего почтамта в декабре 1954 года постановлением
           Правительства СССР был открыт Ставропольский электротехникум связи, единственный в Северокавказской
           географической зоне. Из десяти ставропольских средних специальных учебных заведений колледж связи является
           одним из  крупнейших.
         </CardText>
         <CardText>
           <div className="pull-rught" style={{float: 'right'}}>
             <img src={petrovSmall} alt=""/>
           </div>
           Много сил и энергии в становление учебного заведения вложил основатель и его первый директор Герой
           Советского Союза Владимир Александрович Петров. Материально-техническая база нового учебного заведения
           создавалась с помощью Ставропольского краевого управления связи. В феврале 55-го года около 100 учащихся
           приступили к занятиям по двум специальностям: «Почтовая связь» и «Районная электросвязь и радиофикация».
           Бурное развитие средств связи страны требовало все большее и большее количество специалистов среднего звена.
           В 63-м году сдано в эксплуатацию студенческое общежитие на 450 мест, в 69-м закладывается первый кирпич
           будущего здания учебного комплекса по ул. Черняховского 3, в строительстве которого около 80% работ
           выполнено силами учащихся, преподавателей и сотрудников техникума. В сентябре 71-го в праздничной
           обстановке распахнулись двери нового здания, в котором насчитывается 53 лабораторий, мастерских и кабинетов.
           Имеется актовый зал на 500 мест, библиотека с читальным залом, столовая на 60 мест.
         </CardText>
         <CardText>
           <div className="pull-left" style={{float: 'left', padding: '10px'}}>
             <img src={kabinet207} alt=""/>
           </div>
           В зданиях колледжа разместились медицинский пункт, стоматологический кабинет, парикмахерская и гостиница
           на 100 мест. Спортивная база колледжа связи — одна из лучших среди учебных заведений Северного Кавказа.
           В распоряжении студентов (кроме открытых игровых площадок) большая спортивная арена, тренажерный и
           гимнастический залы, спортивный тир-манеж, а для спортсменов — оздоровительный  центр.
           Весь спортивный комплекс оснащен самым современным оборудованием. В колледже работают спортивные секции:
           волейбольная, баскетбольная, секции атлетической гимнастики и шейпинга. Большая работа проведена
           по благоустройству территории колледжа. Реформа народного образования потребовала нового подхода к системе
           и структуре обучения в техникуме.
         </CardText>
         <CardText>
           <div className="media">
             <div className="pull-right" style={{float: 'right'}}>
               <img src={kabinet306} alt=""/>
             </div>
             <div className="media-body">
               29 октября 1991 года приказом Министерства связи РФ Ставропольский электротехникум связи преобразован в
               колледж связи имени Владимира Александровича Петрова.
             </div>
           </div>
         </CardText>
        </Card>
    );
  }
}
