import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { useState } from 'react'


const Register = () =>{
  const [name, setName] = useState<string>('')
  const [surname, setSurname] = useState<string>('')
  const [birthdate, setBirthdate] = useState<string>('')
  const [Insurance, setInsurance] = useState<string>('')
  const [Family, setFamily] = useState<string>('')

  const mainData = JSON.parse(localStorage.getItem('info')!)

    return(
        <div>
           <Container>
            <Main>
               <DotHolder>
                <Dots bg='#F04E67'/>
                <Line bg='#e5dcde'/>
                <Dots bg='#e5dcde'/>
                <Line bg='#e5dcde'/>
                <Dots bg='#e5dcde'/>
                <Line bg='#e5dcde'/>
                <Dots bg='#e5dcde'/>
                <Line bg='#e5dcde'/>
                <Dots bg='#e5dcde'/>
               </DotHolder>

               <Head>ONLINE APPLICATION</Head>

               <Inputs>
                   <Input1>Personnal Information</Input1>
                   <Input type='text' placeholder='Firstname'
                     value={name}
                     onChange={(e:any)=>{
                          setName(e.target.value)
                     }}
                   />
                   <Input type='text' placeholder='Surname'
                     value={surname}
                     onChange={(e:any)=>{
                          setSurname(e.target.value)
                     }}
                   />
                   <Input type='text' placeholder='Birthdate'
                     value={birthdate}
                     onChange={(e:any)=>{
                          setBirthdate(e.target.value)
                     }}
                   />
                   <Input type='text' placeholder='Insurance number'
                     value={Insurance}
                     onChange={(e:any)=>{
                          setInsurance(e.target.value)
                     }}
                   />
                   <Input type='text' placeholder='Family Status'
                     value={Family}
                     onChange={(e:any)=>{
                          setFamily(e.target.value)
                     }}
                   />
               </Inputs>

               <Button to='/register1'
                  onClick={()=>{
                    
                    const anObj:{} = {
                      name, surname, birthdate, Insurance, Family
                    }
                    localStorage.setItem('info', JSON.stringify(anObj))
                  }}
               >NEXT</Button>

            </Main>
           </Container>
        </div>
    )
}

export default Register;
const Input1 = styled.div`
   height  : 43px;
  width: 320px;
  border-radius: 5px; 
`
const Input = styled.input`
  height  : 43px;
  width: 320px;
  border: 1px solid silver;
  border-radius: 5px;
  padding-left: 10px;
  &::placeholder{
    font-size: 17px;
  }
`
const Button = styled(Link)`
  padding  : 10px 26px;
  background-color: #F04E67;
  color: white;
  font-size: 18px;
  border-radius: 3px;
  text-decoration: none;
  border: 2px solid silver;
  /* &:hover {
    border: 1px solid silver;
  } */
`
const Inputs = styled.div`
  height  : 330px;
  width: 390px;
  border: 1px solid silver;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 70px;
  padding-bottom: 70px;
`
const Head = styled.h3`   
`
const DotHolder = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* gap: 0.5px; */
`
const Line = styled.div<{bg:string}>`
  height  :3px ;
  width: 100px;
  background-color: ${({bg})=>bg};
`
const Dots = styled.div<{bg:string}>`
  height: 15px;
  width: 15px;
  background-color: ${({bg})=>bg};
  border-radius: 50%;
`
const Main = styled.div`
   height: 600px;
   width: 650px;
   border: 1px solid silver;
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-direction: column;
   padding: 20px;

`
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`