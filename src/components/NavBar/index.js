import React from 'react';

import { DropdownOption, DropdownProvider, DropdownRoot } from '../Dropdown'
import { Container, DropdownStyles } from './styles';
import { Company, Developers, Products } from '../Content'

function NavBar() {
  return (
    <DropdownProvider>
      <DropdownStyles>
        <Container>
            <ul>
                <li>
                    <DropdownOption 
                      name="Produtos"
                      content={Products}
                    />
                </li>
                <li>
                    <DropdownOption 
                      name="Desenvolvedores"
                      content={Developers}
                    />
                </li>
                <li>
                    <DropdownOption 
                      name="Empresas"
                      content={Company}
                    />
                </li>
            </ul>
        </Container>

        <DropdownRoot />
      </DropdownStyles>
    </DropdownProvider>
  )
}

export default NavBar;