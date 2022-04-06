import React, { useEffect, useState } from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import Card from "../components/Card";

const GameScreen = (props) => {
    const [cards, setCards] = useState([])
    const [select, setSelect] = useState(null)
    const [turns,setTurns] = useState(0)
    const [match,setMatch] = useState(0)

    useEffect(() => {
        console.log("HOW")
        NewGame()
    }, []);

    const NewGame = () => {
        setTurns(0);
        setMatch(0);
        setSelect(null);
        console.log("newgame")
        let arr = []
        let numarr = [];
        for(let i=0;i<16;i++){
            numarr.push(i);
        }
        numarr.sort(()=>{return 0.5-Math.random()})
        console.log(numarr)

        for (let i = 0; i < 16; i++) {
            arr.push({
                id: i,
                data: String.fromCharCode(65 + (numarr[i] / 2)),
                visible: false
            })
        }
        setCards(arr);
    }

    const handleClick = (id) => {
        console.log("handle "+id)
        if (id == select || cards[id].visible == true) return;

        let arr = [...cards]
        arr[id] = {
            id: id,
            data: arr[id].data,
            visible: true
        }
        setCards(arr);

        if (select == null) {
            setSelect(id);
        } else {
            setTurns(turns+1)
            if (cards[select].data == cards[id].data) {
                setMatch(match+1)
                setSelect(null);
            }
            else {
                console.log("timeout started")
                setTimeout(() => {
                    arr[id] = {
                        id: id,
                        data: arr[id].data,
                        visible: false
                    }
                    arr[select] = {
                        id: select,
                        data: arr[select].data,
                        visible: false
                    }
                    setCards(arr);
                    setSelect(null);
                    console.log("timeout completed")
                }, 1000)
            }
        }
    }

    return (
        <View style={{flex:1, backgroundColor:"#EEEEEE"}}>
            <View style={styles.gameContainer}>
                {cards.map((item, index) => {
                    return (
                        <Card OnClick={handleClick} key={index} item={item} children={<Text style={styles.cardText}>{item.data}</Text>}/>
                    );
                })
                }
            </View>
            <View style={styles.scoreContainer}>
                <Text style={styles.score}>Attempts: {turns}</Text>
                <Text style={styles.score}>Matches: {match}</Text>
            </View>
            {
                (match==8?<View style={styles.resetButton}>
                    <Button color={'brown'} onPress={()=>{NewGame()}} title={"PLAY AGAIN"}></Button>
                </View>:<View style={styles.resetButton}>
                    <Button color={'brown'} onPress={()=>{props.navigation.replace('Home')}} title={"Back"}></Button>
                </View>)
            }
        </View>
    )
}
export default GameScreen;

const styles = StyleSheet.create({
    gameContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        margin:10,
        justifyContent: "center"
    },
    scoreContainer: {
        marginTop: 24,
        flexDirection: "row",
        justifyContent: "space-around"
    },
    score: {
        alignContent: "center",
        justifyContent: "center",
        fontSize: 18
    },
    cardText: {
        fontSize: 34,
        color: "#FFFFFF",
        fontWeight:"700"
    },
    resetButton:{
        position:"absolute",
        bottom:0,
        left:0,
        right:0,
        marginHorizontal:10,
        marginBottom:10,
        borderRadius: 6,
        elevation: 3,
    }
})