class Demo {
    public static void main(String[] args) {

        calc cu = new calc();
        cu.add();
    }
}

class calc {
    int num1;
    int num2;

    public int add() {
        System.out.println(this.num1 + this.num2);
        return 4;
    }
}