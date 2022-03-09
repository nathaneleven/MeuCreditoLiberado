import React from 'react'
import { Flex, Box, Heading } from '@chakra-ui/layout'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react'

const PerguntasFrequentes = () => {
    return (
        <>
        <Box py="10" w="100%" align="center"  backgroundColor="#F0F3F6">
        <Flex maxW="1272px" align="center" direction={{base: "column", md: "column"}} >
            <Heading pb="20px" fontSize="45px" color="#1F0E59" as="h2">
            Perguntas Frequentes
            </Heading>
            <Accordion allowMultiple w="100%">
            <AccordionItem>
                <h2>
                <AccordionButton bgColor='#1F0E59' color='#F2A03D' fontWeight="bold" >
                    <Box flex='1' textAlign='center'>
                    Como funciona a antecipação do Saque-Aniversário?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel fontSize="20px" textAlign="start">
                Nesta modalidade de crédito, você consegue antecipar as parcelas anuais do saque-aniversário. Os valores serão descontados do seu saldo do FGTS anualmente. Isso quer dizer que você pode antecipar as parcelas que receberia nos próximos anos para ter o dinheiro em mãos de maneira mais imediata.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton bgColor='#1F0E59' color='#F2A03D' fontWeight="bold" >
                    <Box flex='1' textAlign='center'>
                    Quem pode contratar?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel fontSize="20px" textAlign="start">
                Todos os trabalhadores com carteira assinada ou com contas inativas do FGTS que optarem pelo saque-aniversário poderão solicitar esse serviço.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton bgColor='#1F0E59' color='#F2A03D' fontWeight="bold" >
                    <Box flex='1' textAlign='center'>
                    Qual a diferença entre Saque-Aniversário e Antecipação Saque-Aniversário?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel fontSize="20px" textAlign="start">
                O saque-aniversário é uma modalidade de saque do FGTS. A Antecipação do Saque-Aniversário, por sua vez, é a possibilidade de crédito tendo como garantia o saldo do FGTS.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton bgColor='#1F0E59' color='#F2A03D' fontWeight="bold" >
                    <Box flex='1' textAlign='center'>
                    Como pagar as parcelas do empréstimo?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel fontSize="20px" textAlign="start">
                As parcelas são debitadas uma vez ao ano, automaticamente da sua conta FGTS em que o saldo foi usado como garantia de crédito. Anualmente, quando o seu saque-aniversário for depositado, o valor da parcela mais juros serão descontados.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton bgColor='#1F0E59' color='#F2A03D' fontWeight="bold" >
                    <Box flex='1' textAlign='center'>
                    O saldo do FGTS fica bloqueado após contratar?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel fontSize="20px" textAlign="start">
                Ao contratar essa modalidade, as instituições financeiras pagam de uma vez só as parcelas que o trabalhador retiraria nos próximos anos. Com isso, o valor fica reservado e, assim, bloqueado.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton bgColor='#1F0E59' color='#F2A03D' fontWeight="bold" >
                    <Box flex='1' textAlign='center'>
                    Posso voltar para o saque-rescisão após fazer a Antecipação Saque-Aniversário?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel fontSize="20px" textAlign="start">
                Não. Você poderá voltar ao saque-rescisão somente após finalizar o período de contratação da Antecipação Saque-Aniversário.
                </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
                <h2>
                <AccordionButton bgColor='#1F0E59' color='#F2A03D' fontWeight="bold" >
                    <Box flex='1' textAlign='center'>
                    Se eu for demitido, recebo os 40% de multa do FGTS?
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
                </h2>
                <AccordionPanel fontSize="20px" textAlign="start">
                Sim. É possível sacar os 40% de multa rescisória. Entretanto, se você optou pelo saque-aniversário, não é possível sacar o valor total da rescisão em caso de demissão sem justa causa.
                </AccordionPanel>
            </AccordionItem>
            </Accordion>
            </Flex>
        </Box>
        </>
    )}

export default PerguntasFrequentes