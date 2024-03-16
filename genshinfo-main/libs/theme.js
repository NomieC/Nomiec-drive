import { extendTheme } from "@chakra-ui/theme-utils";
import { mode } from '@chakra-ui/theme-utils'

const styles = {
    global: props=> ({
        body: {
            bg: mode('#FFFDEF', '#202023')(props)
        }
    })
}

const config = {
    initialColorMode: 'light',
    useSystemColorMode: false
}

const theme = extendTheme({
    styles, config
})

export default theme