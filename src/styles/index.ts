import styled from "@emotion/styled";
import { Box } from "@mui/system";

export const Flex = styled(Box)({
    display: "flex",
    flexWrap: "wrap",
});

export const FlexCenter = styled(Flex)({
    justifyContent: "center",
    alignItems: "center",
});

export const FlexBetween = styled(Flex)({
    justifyContent: "space-between",
});

export const FlexAround = styled(Flex)({
    justifyContent: "space-around",
    alignItems: "center",
});

export const FlexEvenly = styled(Flex)({
    justifyContent: "space-evenly",
    alignItems: "center",
});
