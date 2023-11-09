import styled from 'styled-components'
import {useState} from 'react'
import {BsCamera} from 'react-icons/bs'


const Page1 = () =>{

    return <Main>
        <CircleHold>
            <Circle bg='orange'>1</Circle>
            <Lin />
            <Circle bg='gray'>2</Circle>
            <Lin />
            <Circle bg='gray'>3</Circle>
        </CircleHold>
        <Space />
        <Input type='text' placeholder='Enter your name' />
        <Space2 />
        <Input type='email' placeholder='Enter your email' />
        <Space2 />
        <Button>  <Next
          onClick={()=>{
            localStorage.setItem("page", JSON.stringify(2))
          }}
        >Next</Next></Button>

    </Main>;
}


const Page2 = () =>{

    return <Main>
        <CircleHold>
            <Circle bg='orange'>1</Circle>
            <Lin />
            <Circle bg='gray'>2</Circle>
            <Lin />
            <Circle bg='gray'>3</Circle>
        </CircleHold>
        <Space />
        <Input type='password' placeholder='Enter your password' />
        <Space2 />
        <Button>
            <Next style={{backgroundColor:"green"}}
              onClick={()=>{
                localStorage.setItem("page", JSON.stringify(1))
             }}
            >Prev</Next> 
            <Next
           onClick={()=>{
             localStorage.setItem("page", JSON.stringify(3))
          }}
        >Next</Next></Button>

    </Main>;
}


const Page3 = () =>{
    // const [show , setShow] = useState<number>(0)
    // const [image, setImage] = useState<string>("")
    const [avatar, setAvatar] = useState<string>("")

    const outPut = (e :any ) =>{
        const file = e.target.files[0]
        const readImage = URL.createObjectURL(file)
        // setImage(file)
        setAvatar(readImage)
    }


    return <Main>
        <CircleHold>
            <Circle bg='orange'>1</Circle>
            <Lin />
            <Circle bg='gray'>2</Circle>
            <Lin />
            <Circle bg='gray'>3</Circle>
        </CircleHold>
        <Space />
        <Hold>
            <Input2 type='file'
              id='id'
              accept='img/jpg, img/jpg'
              onChange={outPut}
             />

             <label htmlFor = "id">
                <BsCamera/>
             </label>
        </Hold>
        <Space2 />
        <Button>
        <Next style={{backgroundColor:"green"}}
          onClick={()=>{
            localStorage.setItem("page", JSON.stringify(2))
          }}
        >Prev</Next> 
        </Button>

    </Main>;
}


const Register = () =>{
    const show = JSON.parse(localStorage.getItem("page")!)
    return(
        <div>
            <Container>
                {
                    show === 1 ? (<Page1/>) : show === 2 ? (<Page2/>) : show === 3 ? (<Page3/>) : null
                }
                {/* <Page3/> */}
            </Container>
        </div>
    )

}
export default Register;

const Input2 = styled.input`
    display: none;
    height: 50px;
    width: 50px;
`
const Hold = styled.div`
    height: 280px;
    width: 300px;
    border: 1px solid silver;
    border-radius: 10px;
    position: relative;
    label{
         font-size: 40px;
         color: black;
         position: absolute;
         top: 230px;
         right: 5px; 
    }
`
const Button = styled.div`
    width: 600px;
    height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
const Next = styled.div`
    height: 40px;
    width: 80px;
    background-color: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin-left: 10px;
`
const Space2 = styled.div`
    height: 20px;
`
const Input = styled.input`
    border: 1px solid silver;
    outline: none;
    width: 580px;
    height: 50px;
    padding-left: 10px;
`
const Space = styled.div`
    height: 70px;
`
const Lin = styled.div`
    width: 90px;
    height: 5px;
    background-color: pink;
`
const Circle = styled.div<{bg:string}>`
    height: 60px;
    width: 60px;
    border-radius:50%;
    background-color: ${({bg})=>bg};
    display: flex;
    justify-content: center;
    align-items: center;
`
const CircleHold = styled.div`
    height: 50px;
    width: 400px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5;
`
const Main = styled.div`
    height: 500px;
    width: 700px;
    border: 2px solid silver;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
`
const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100vw;
   height: 100vh;
`