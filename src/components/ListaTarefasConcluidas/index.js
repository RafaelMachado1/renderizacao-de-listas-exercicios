import React from "react";
import {Box} from './styles';

function ListaTarefasConcluidas(props) {
    const completas = props?.completa
    return (

        <Box>
            <ul>
                {completas.map((tarefaConcluida) => {
                    return <li key={tarefaConcluida}>{tarefaConcluida}</li>
                })}
            </ul>
        </Box>
        
    )
}

export default ListaTarefasConcluidas;