import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BaseContainer from '../components/base-container'
import { Box, Button, Link, Typography, Divider, Card, CardContent, CardMedia, Grid } from '@material-ui/core'
import { Link as GatsbyLink } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import WingContainer from '../components/people/wing-container'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  rounded: {
    borderRadius: 32,
  },
  bigCardContent: {
    padding: 32,
  }
});

function PeoplePage() {
  const classes = useStyles();

  const objectMap = (obj, fn) =>
    Object.fromEntries(
      Object.entries(obj).map(
        ([k, v], i) => [k, fn(v, k, i)]
      )
    )

  const images = objectMap(useStaticQuery(graphql`
    query {
      leeYatBun: file(relativePath: { eq: "people/kohjiaxian.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          },
        },
      },
      chenHsiaoTing: file(relativePath: { eq: "people/kohjiaxian.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          },
        },
      },
      yanYuShan: file(relativePath: { eq: "people/kohjiaxian.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          },
        },
      },
      loyYokeYue: file(relativePath: { eq: "people/kohjiaxian.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          },
        },
      },
      yinRuoYan: file(relativePath: { eq: "people/kohjiaxian.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          },
        },
      },
      liuXiaoWen: file(relativePath: { eq: "people/kohjiaxian.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          },
        },
      },
      nicoleJoseph: file(relativePath: { eq: "people/kohjiaxian.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          },
        },
      },
      chuaKaiJun: file(relativePath: { eq: "people/kohjiaxian.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          },
        },
      },
      ongYiEn: file(relativePath: { eq: "people/kohjiaxian.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          },
        },
      },
      jeffSieuYong: file(relativePath: { eq: "people/kohjiaxian.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          },
        },
      },
      xiangQingYi: file(relativePath: { eq: "people/kohjiaxian.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          },
        },
      },
      linFangYuan: file(relativePath: { eq: "people/kohjiaxian.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          },
        },
      },
      kohJiaXian: file(relativePath: { eq: "people/kohjiaxian.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          },
        },
      },
      leeJingYuJonathan: file(relativePath: { eq: "people/kohjiaxian.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          },
        },
      },
    }
  `), image => image.childImageSharp);


  // images.forEach((value, key) => {
  //   console.log(value, key);
  // });

  const president = {
    name: 'Lee Yat Bun',
    role: 'President',
    image: images.leeYatBun,
  };

  const studentLifeHead = {
    name: 'Chen Hsiao Ting',
    role: 'Vice President of Student Life',
    image: images.chenHsiaoTing,
  };

  const studentDevelopmentHead = {
    name: 'Yan Yushan',
    role: 'Vice President of Student Development',
    image: images.yanYuShan,
  };

  const internalRelationsHead = {
    name: 'Loy Yoke Yue',
    role: 'Vice President of Internal Relations',
    image: images.loyYokeYue,
  };

  const externalRelationsHead = {
    name: 'Yin Ruoyan',
    role: 'Vice President of External Relations',
    image: images.yinRuoYan,
  };

  const externalRelationsWing = {
    name: 'External Relations',
    head: externalRelationsHead,
    cells: [
      {
        name: 'Publicity Cell',
        members: [
          {
            name: 'Lin Fangyuan',
            role: 'Director of Publicity',
            image: images.linFangYuan,
          },
          {
            name: 'Koh Jia Xian',
            role: 'Deputy Director of Publicity (Graphic & Content)',
            image: images.kohJiaXian,
          },
          {
            name: 'Lee Jing Yu, Jonathan',
            role: 'Deputy Director of Publicity (Photo & Video)',
            image: images.leeJingYuJonathan,
          },
        ]
      }
    ]
  };

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
          {
            name: 'Liu Xiaowen',
            role: 'General Secretary',
            image: images.liuXiaoWen,
          },
          {
            name: 'Nicole Joseph',
            role: 'Assistant General Secretary',
            image: images.nicoleJoseph,
          },
        ],
      },
      {
        name: 'Finance Cell',
        members: [
          {
            name: 'Chua Kai Jun',
            role: 'Finance Secretary',
            image: images.chuaKaiJun,
          },
          {
            name: 'Ong Yi En',
            role: 'Assistant Finance Secretary',
            image: images.ongYiEn,
          },
        ],
      },
      {
        name: 'IT Cell',
        members: [

        ]
      },
    ]
  }

  const props = {
    wings: [  
      presidentialWing,
      externalRelationsWing,

    ]
  };

  return <BaseContainer title='People'>
    {props.wings.map((wing) =>
      <Box mb={8}>
        <WingContainer {...wing}/>
      </Box>
    )}
    
  </BaseContainer>;
}

export default PeoplePage
