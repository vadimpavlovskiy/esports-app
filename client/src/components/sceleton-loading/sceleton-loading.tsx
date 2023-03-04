import { Skeleton, Stack } from "@chakra-ui/react";

export default function LoadingSceleton () {
    
    return (
        <Stack marginY={14} minWidth={'2xl'} height={320}>
            <Skeleton rounded={'xl'} width={'full'}  height={80}/>
            <Skeleton rounded={'xl'} width={'full'}height={80}/>
            <Skeleton rounded={'xl'} width={'full'}  height={80}/>
            <Skeleton rounded={'xl'} width={'full'} height={80}/>
        </Stack>
    )
}