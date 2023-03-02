import { Skeleton, Stack } from "@chakra-ui/react";

export default function LoadingSceleton () {
    
    return (
        <Stack>
            <Skeleton height={30}/>
            <Skeleton height={30}/>
            <Skeleton height={30}/>
            <Skeleton height={30}/>
        </Stack>
    )
}