import React from 'react'
import BaseContainer from '../components/base-container'
import { Box, Divider, Link, Typography } from '@material-ui/core'
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';
import WingContainer from '../components/people/wing-container'

const peopleArray = [
  {
    name: 'Lee Yat Bun',
    role: 'President',
  },
  {
    name: 'Chen Hsiao Ting',
    role: 'Vice President of Student Development',
  },
  {
    name: 'Yan Yushan',
    role: 'Vice President of Student Development',
  },
  {
    name: 'Loy Yoke Yue',
    role: 'Vice President of Internal Relations',
  },
  {
    name: 'Yin Ruoyan',
    role: 'Vice President of External Relations',
  },
  {
    name: 'Liu Xiaowen',
    role: 'General Secretary',
  },
  {
    name: 'Nicole Joseph',
    role: 'Assistant General Secretary',
  },
  {
    name: 'Chua Kai Jun',
    role: 'Finance Secretary',
  },
  {
    name: 'Ong Yi En',
    role: 'Assistant Finance Secretary',
  },
  {
    name: 'Jeff Sieu Yong',
    role: 'IT Secretary',
  },
  {
    name: 'Xiang Qingyi',
    role: 'Assistant IT Secretary',
  },
  {
    name: 'Raveen Prabhu',
    role: 'Director of FOP',
  },
  {
    name: 'Lo Zhao Wei',
    role: 'Deputy Director of FOP',
  },
  {
    name: 'Gu Geng',
    role: 'Director of Student Relations',
  },
  {
    name: 'Koh Quan Wei Ivan',
    role: 'Deputy Director of Student Relations',
  },
  {
    name: 'Tan Shi Min',
    role: 'Director of Academic Liaison',
  },
  {
    name: 'Fang Junwei, Samuel',
    role: 'Deputy Director of Academic Liaison',
  },
  {
    name: 'Kan Yu Xuan',
    role: 'Director of Community Service',
  },
  {
    name: 'Foo Zi Yi, Patricia',
    role: 'Deputy Director of Community Service',
  },
  {
    name: 'Ren Weilin',
    role: 'Director of Welfare',
  },
  {
    name: 'Fun Wen Yin',
    role: 'Deputy Director of Welfare',
  },
  {
    name: 'Renee Lee',
    role: 'Director of Sports',
  },
  {
    name: 'Lim Yu Long',
    role: 'Deputy Director of Sports',
  },
  {
    name: 'Lin Fangyuan',
    role: 'Director of Publicity',
  },
  {
    name: 'Koh Jia Xian',
    role: 'Deputy Director of Publicity (Graphics & Content)',
  },
  {
    name: 'Lee Jing Yu, Jonathan',
    role: 'Deputy Director of Publicity (Photo & Video)',
  },
  {
    name: 'Tean Wei Jun',
    role: 'Director of Marketing',
  },
  {
    name: 'Oliver Gui Chin Wee',
    role: 'Deputy Director of Marketing (Sponsorship)',
  },
  {
    name: 'Malcolm Sng',
    role: 'Deputy Director of Marketing (Merchandise)',
  },
];

function PeoplePage() {
  const { allFile } = useStaticQuery(graphql`
    query {
      allFile(filter: {
        extension: {regex: "/(jpg)|(jpeg)|(png)/"}, 
        sourceInstanceName: {eq: "peopleImages"}}
        ) 
      {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1000, quality: 100) {
                originalName
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }`);

  const images = Object.assign({}, ...allFile.edges.map(edge => ({ [edge.node.childImageSharp.fluid.originalName.split('.')[0]]: edge.node.childImageSharp.fluid })));

  peopleArray.forEach((person) => {
    const keyPrefix = person.name.replace(/ /g, '').replace(/,/g, '');
    person.image = images[keyPrefix + '1'];
    person.imageFun = images[keyPrefix + '2'];
  });

  const people = Object.assign({}, ...peopleArray.map(person => ({ [person.name.replace(/ /g, '').replace(/,/g, '')]: person })));
  const president = people.LeeYatBun;
  const studentLifeHead = people.ChenHsiaoTing;
  const studentDevelopmentHead = people.YanYushan;
  const internalRelationsHead = people.LoyYokeYue;
  const externalRelationsHead = people.YinRuoyan;

  const presidentialWing = {
    name: 'Presidential Wing',
    head: president,
    cells: [
      {
        name: 'Presidential Cell',
        members: [
          president,
          studentLifeHead,
          studentDevelopmentHead,
          internalRelationsHead,
          externalRelationsHead,
        ],
      },
      {
        name: 'Secretariat Cell',
        members: [
          people.LiuXiaowen,
          people.NicoleJoseph,
        ],
      },
      {
        name: 'Finance Cell',
        members: [
          people.ChuaKaiJun,
          people.OngYiEn,
        ],
      },
      {
        name: 'IT Cell',
        members: [
          people.JeffSieuYong,
          people.XiangQingyi,
        ]
      },
    ]
  }

  const externalRelationsWing = {
    name: 'External Relations Wing',
    head: people.YinRuoyan,
    cells: [
      {
        name: 'Publicity Cell',
        members: [
          people.LinFangyuan,
          people.KohJiaXian,
          people.LeeJingYuJonathan,
        ],
      },
      {
        name: 'Marketing Cell',
        members: [
          people.TeanWeiJun,
          people.OliverGuiChinWee,
          people.MalcolmSng,
        ],
      },
    ]
  }

  const studentDevelopmentWing = {
    name: 'Student Development Wing',
    head: people.YanYushan,
    cells: [
      {
        name: 'Academic Liaison Cell',
        members: [
          people.TanShiMin,
          people.FangJunweiSamuel,
        ],
      },
      {
        name: 'Community Service Cell',
        members: [
          people.KanYuXuan,
          people.FooZiYiPatricia,
        ],
      },
    ]
  }

  const studentLifeWing = {
    name: 'Student Life Wing',
    head: people.ChenHsiaoTing,
    cells: [
      {
        name: 'FOP Cell',
        members: [
          people.RaveenPrabhu,
          people.LoZhaoWei,
        ],
      },
      {
        name: 'Student Relations Cell',
        members: [
          people.GuGeng,
          people.KohQuanWeiIvan,
        ],
      },
    ]
  }

  const internalRelationsWing = {
    name: 'Internal Relations Wing',
    head: people.LoyYokeYue,
    cells: [
      {
        name: 'Welfare Cell',
        members: [
          people.RenWeilin,
          people.FunWenYin,
        ],
      },
      {
        name: 'Sports Cell',
        members: [
          people.ReneeLee,
          people.LimYuLong,
        ],
      },
    ]
  }

  const wings = [
    presidentialWing,
    studentLifeWing,
    studentDevelopmentWing,
    internalRelationsWing,
    externalRelationsWing,
  ];

  wings.forEach((wing) => {
    const keyPrefix = wing.name.replace(/ /g, '');
    wing.image = images[keyPrefix + '1'];
    wing.imageFun = images[keyPrefix + '2'];
  });

  const props = {
    wings: wings,
  };

  return <BaseContainer title='People'>
    <Box mb={4}>
      <Typography variant="h3">
        People
      </Typography>
    </Box>
    <ul>
      {
        props.wings.map((wing) =>
          <li>
            <Typography variant="subtitle1">
              <Link component={GatsbyLink} href={`#${wing.name}`}>{wing.name}</Link>
            </Typography>
          </li>
        )
      }
    </ul>
    <Box mt={8} mb={4}>
      <Divider></Divider>
    </Box>
    {props.wings.map((wing) =>
      <Box mt={8}>
        <WingContainer {...wing} />
      </Box>
    )}

  </BaseContainer>;
}

export default PeoplePage
