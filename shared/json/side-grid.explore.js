import { Avatar } from "@chakra-ui/avatar"

export const dummyTags = () => {
    const data = []
    for(let i = 0; i <= 8; i++){
        let dum = {
            id: i + 1,
            value: `tagdummy ${i + 1}`,
            title: `Tag ${i + 1}`
        }
        data.push(dum)
    }

    return data
}

export const dummyVirals = () => {
    const data = []
    for(let i = 0; i <= 8; i++){
        let dum = {
            id: i + 1,
            value: `viraldummy ${i + 1}`,
            title: `Viral ${i + 1}`
        }
        data.push(dum)
    }

    return data
}

export const dummyTopTags = () => {
    const data = []
    for(let i = 0; i <= 8; i++){
        let dum = {
            id: i + 1,
            value: `topdummy ${i + 1}`,
            title: `Top Dummy ${i + 1}`,
            des:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            avatar: "https://bit.ly/sage-adebayo",
            user: `dummy ${i + 1}`,
        }
        data.push(dum)
    }

    return data
}