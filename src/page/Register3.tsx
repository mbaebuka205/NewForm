import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const Register3 = () =>{

  const [email, setEmail] = useState<string>('')
  const [number, setNumber] = useState<number>(0)
  const [numb, setNumb] = useState<number>(0)

  const mainData = JSON.parse(localStorage.getItem("info")!)
    return(
        <div>
           <Container>
            <Main>
               <DotHolder>
                <Dots bg='#F04E67'/>
                <Line bg='#F04E67'/>
                <Dots bg='#F04E67'/>
                <Line bg='#F04E67'/>
                <Dots bg='#F04E67'/>
                <Line bg='#e5dcde'/>
                <Dots bg='#e5dcde'/>
                <Line bg='#e5dcde'/>
                <Dots bg='#e5dcde'/>
               </DotHolder>

               <Head>ONLINE APPLICATION</Head>

               <Inputs>
                   <Input1>Contact information</Input1>
                   <Input type='email' placeholder='Email address'
                     value={email}
                     onChange={(e:any) =>{
                      setEmail(e.target.value)
                     }}
                   />
                   <Input type='text' placeholder='Phone'
                      value={number}
                      onChange={(e:any) =>{
                       setNumber(e.target.value)
                      }}
                   />
                   <Input type='number' placeholder='Mobile'
                      value={numb}
                      onChange={(e:any) =>{
                       setNumb(e.target.value)
                      }}
                   />
               </Inputs>

               <Buttonholder>
               <Button to='/register1'>PREVIOUS</Button>
               <Button to="/register4"
                 onClick={() =>{
                  const va:{} = {
                    email, number, numb, 
                    street: mainData?.street, city: mainData?.city, postcode: mainData?.postcode, country: mainData?.country,
                    name: mainData?.name, surname: mainData?.surname,
                    birthdate: mainData?.birthdate, insurance: mainData.Insurance, family: mainData?.Family
                  }
                 }}
               >NEXT</Button>
               </Buttonholder>

            </Main>
           </Container>
        </div>
    )
}

export default Register3;
const Buttonholder = styled.div`
    display: flex;
    gap:15px;
`
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
  border: 2px solid silver;
  text-decoration: none;
`
const Inputs = styled.div`
 min-height  : 200px;
  width: 390px;
  border: 1px solid silver;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding-top: 70px;
  padding-bottom: 70px;
  gap: 18px;
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
   min-height: 600px;
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