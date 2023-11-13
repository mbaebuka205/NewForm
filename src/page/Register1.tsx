import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {useState} from 'react'

const Register1 = () =>{
     
     const [street, setStreet] = useState<string>('')
     const [city, setCity] = useState<string>('')
     const [postcode, setPostcode] = useState<string>('')
     const [country, setCountry] = useState<string>('')
   
     const mainData = JSON.parse(localStorage.getItem("info")!)

    return(
        <div>
           <Container>
            <Main>
               <DotHolder>
                <Dots bg='#F04E67'/>
                <Line bg='#F04E67'/>
                <Dots bg='#F04E67'/>
                <Line bg='#e5dcde'/>
                <Dots bg='#e5dcde'/>
                <Line bg='#e5dcde'/>
                <Dots bg='#e5dcde'/>
                <Line bg='#e5dcde'/>
                <Dots bg='#e5dcde'/>
               </DotHolder>

               <Head>ONLINE APPLICATION</Head>

               <Inputs>
                   <Input1>Address</Input1>
                   <Input type='text' placeholder='Street'
                     value={street}
                     onChange={(e:any)=>{
                          setStreet(e.target.value)
                     }}
                   />
                   <Input type='text' placeholder='City'
                     value={city}
                     onChange={(e:any)=>{
                          setCity(e.target.value)
                     }}
                   />
                   <Input type='text' placeholder='Postcode'
                     value={postcode}
                     onChange={(e:any)=>{
                          setPostcode(e.target.value)
                     }}
                   />
                   <Input type='text' placeholder='Country'
                     value={country}
                     onChange={(e:any)=>{
                          setCountry(e.target.value)
                     }}
                   />
               </Inputs>

               <Buttonholder>
               <Button to='/'>PREVIOUS</Button>
               <Button to='/register3'
                  onClick={() =>{
                    const va: {} = {
                     street, city, postcode, country,
                      name: mainData?.name, surname: mainData?.surname,
                      birthdate: mainData?.birthdate, insurance: mainData.Insurance, family: mainData?.Family
                    }
                    localStorage.setItem('info', JSON.stringify(va))
                     
                  }}
               >NEXT</Button>
               </Buttonholder>

            </Main>
           </Container>
        </div>
    )
}

export default Register1;
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