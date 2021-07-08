import React from 'react'
import BaseContainer from '../components/base-container'
import { Box, Divider, Grid, Link, Typography } from '@material-ui/core'
import { useStaticQuery, graphql, Link as GatsbyLink } from 'gatsby';
import WingContainer from '../components/people/wing-container'
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const peopleArray = [
  {
    name: 'Lee Yat Bun',
    title: 'President',
  },
  {
    name: 'Chen Hsiao Ting',
    title: 'Vice President of Student Life',
  },
  {
    name: 'Yan Yushan',
    title: 'Vice President of Student Development',
  },
  {
    name: 'Loy Yoke Yue',
    title: 'Vice President of Internal Relations',
  },
  {
    name: 'Yin Ruoyan',
    title: 'Vice President of External Relations',
  },
  {
    name: 'Liu Xiaowen',
    title: 'General Secretary',
  },
  {
    name: 'Nicole Joseph',
    title: 'Assistant General Secretary',
  },
  {
    name: 'Chua Kai Jun',
    title: 'Finance Secretary',
  },
  {
    name: 'Ong Yi En',
    title: 'Assistant Finance Secretary',
  },
  {
    name: 'Jeff Sieu Yong',
    title: 'IT Secretary',
  },
  {
    name: 'Xiang Qingyi',
    title: 'Assistant IT Secretary',
  },
  {
    name: 'Raveen Prabhu',
    title: 'Director of FOP',
  },
  {
    name: 'Lo Zhao Wei',
    title: 'Deputy Director of FOP',
  },
  {
    name: 'Gu Geng',
    title: 'Director of Student Relations',
  },
  {
    name: 'Koh Quan Wei Ivan',
    title: 'Deputy Director of Student Relations',
  },
  {
    name: 'Tan Shi Min',
    title: 'Director of Academic Liaison',
  },
  {
    name: 'Fang Junwei, Samuel',
    title: 'Deputy Director of Academic Liaison',
  },
  {
    name: 'Kan Yu Xuan',
    title: 'Director of Community Service',
  },
  {
    name: 'Foo Zi Yi, Patricia',
    title: 'Deputy Director of Community Service',
  },
  {
    name: 'Ren Weilin',
    title: 'Director of Welfare',
  },
  {
    name: 'Fun Wen Yin',
    title: 'Deputy Director of Welfare',
  },
  {
    name: 'Renee Lee',
    title: 'Director of Sports',
  },
  {
    name: 'Lim Yu Long',
    title: 'Deputy Director of Sports',
  },
  {
    name: 'Lin Fangyuan',
    title: 'Director of Publicity',
  },
  {
    name: 'Koh Jia Xian',
    title: 'Deputy Director of Publicity (Graphics & Content)',
  },
  {
    name: 'Lee Jing Yu, Jonathan',
    title: 'Deputy Director of Publicity (Photo & Video)',
  },
  {
    name: 'Tean Wei Jun',
    title: 'Director of Marketing',
  },
  {
    name: 'Oliver Gui Chin Wee',
    title: 'Deputy Director of Marketing (Sponsorship)',
  },
  {
    name: 'Malcolm Sng',
    title: 'Deputy Director of Marketing (Merchandise)',
  },
];

function PeoplePage() {
  const { allFile } = useStaticQuery(graphql`{
  allFile(
    filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, sourceInstanceName: {eq: "peopleImages"}}
  ) {
    edges {
      node {
        name
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  }
}
`);

  const images = Object.assign({}, ...allFile.edges.map(edge => ({ [edge.node.name]: getImage(edge.node) })));

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

  return (
    <BaseContainer title='People'>
      <Box mb={4}>
        <Typography variant="h3">
          People
        </Typography>
        <Typography variant="h4">
          23rd Management Committee
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {
          props.wings.map((wing) =>
            <Grid item xs={12} md={6}>
              <a aria-label={`Photo of ${wing.name}`} href={`#${wing.name}`}><GatsbyImage image={wing.image} style={{borderRadius: '8px'}} /></a>
              <Box mt={2}>
                <Typography variant="subtitle1">
                  <Link component={GatsbyLink} href={`#${wing.name}`}>{wing.name}</Link>
                </Typography>
              </Box>
            </Grid>
          )
        }
      </Grid>
      <Box mt={8} mb={4}>
        <Divider></Divider>
      </Box>
      {props.wings.map((wing) =>
        <Box mt={8}>
          <WingContainer {...wing} />
        </Box>
      )}

    </BaseContainer>
  );
}

export default PeoplePage
