import React, { useState, useEffect } from "react";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import MejaKerja from "./MejaKerja";
import { connect } from "react-redux";
import ProfileDashboard from "./ProfileDasboard";
import Skill from "./Skill";
import Inspirasi from "./Inspirasi";
import ToolsDashboard from "./ToolsDashboard";
import { thunk_private_key } from "../../middleware/user/private-key/privateKeyMiddleware";
import { thunk_public_key } from "../../middleware/user/public-key/publicKeyMiddleware";
import Cookies from 'universal-cookie';

const DashboardComponent = (props) => {
  console.log(props)
  useEffect(() => {
    const cookies = new Cookies()
    if(cookies.get('private_key') != undefined && props.private.message === null && props.private.isLoading === false){
      const dataPrivate = {
        private_key: cookies.get('private_key')
      }
      props.onPrivate(dataPrivate, window.location.origin)
    }
    if(cookies.get('public_key') != undefined && props.private.message === null && props.private.isLoading === false){
      const dataPublic = {
        public_key: cookies.get('public_key')
      }
      props.onPublic(dataPublic, window.location.origin)
    }
    if(props.private.message === "private key tidak valid"){
      cookies.remove('private_key')
      cookies.remove('public_key')
      window.location.href = "/login"
    }
    if(props.public.message === "public key tidak valid"){
      cookies.remove('public_key')
      cookies.remove('private_key')
      window.location.href = "/login"
    }
  }, [props.private, props.public]);

  return (
    <Container maxW="100%" mt={5} pr={2}>
      <Grid
        minH="95vh"
        w="100%"
        p={0}
        m={0}
        mb={4}
        templateColumns="repeat(8, 1fr)"
        gap={[2, 2, 4, 6, 6]}
        overflow="hidden"
        // gridAutoRows={["auto 100px auto", "auto 120px auto"]}
      >
        <GridItem
          colStart={[1, 1]}
          rowStart={[2, 1]}
          colEnd={{ base: 9, lg: 7, md: 7 }}
        >
          <MejaKerja />
        </GridItem>
        <GridItem colStart={[1, 7]} rowStart={1} colEnd={9}>
          <ProfileDashboard />
        </GridItem>
        <GridItem colStart={[1]} colEnd={[9, 9]} rowStart={[3, 2]}>
          <Skill />
        </GridItem>
        <GridItem colStart={1} colEnd={9} rowStart={[4, 3]}>
          <Inspirasi />
        </GridItem>
        <GridItem colStart={1} colEnd={9} rowStart={[5, 4]}>
          <ToolsDashboard />
        </GridItem>
      </Grid>
    </Container>
  );
}

const mapStateToProps = state => {
  return {
    private: state.PrivateKey,
    public: state.PublicKey
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onPrivate: (data, url) => { dispatch(thunk_private_key(data, url)) },
    onPublic: (data, url) => { dispatch(thunk_public_key(data, url)) },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardComponent)