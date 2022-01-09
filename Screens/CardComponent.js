{ /* card */}
<View style={styles.card}>
<Image source={{uri: 'uri'}} style={styles.cardImage} />
    <View style={styles.cardRight}>
    <Text style={styles.cardName}></Text>
    <Text style={styles.cardColor}></Text>
    <Text style={styles.cardPlace}></Text>
    </View>
    <StyledButton onPress={handleSubmit}>
            <ButtonText>Edit</ButtonText>
        </StyledButton>

        <StyledButton onPress={handleSubmit}>
            <ButtonText>Delete</ButtonText>
        </StyledButton>
</View>