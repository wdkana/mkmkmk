import {
  Container,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import MejaKerja from "./MejaKerja";
import { connect } from "react-redux";
import ProfileDashboard from "./ProfileDasboard";
import Skill from "./Skill";
import Inspirasi from "./Inspirasi";
import ToolsDashboard from "./ToolsDashboard";

function DashboardComponent({FirstLoad ,dispatch, ...props}) {

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

export default connect(state => state)(DashboardComponent)