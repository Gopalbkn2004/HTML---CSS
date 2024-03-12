class Main
{
  int a1=10;
  void print()
  {
    System.out.println(a1);
  }
}

public class Scaler {

  //Creating two static members
  static boolean check;
  static int number;
  static int answer = 10;
  int a=10;

  public static void main(String[] args) {
   //global variable
   // System.out.println(o1.answer);
    System.out.println(Scaler.answer); // Assigned value is printed.
    Main m1=new Main();
    m1.a=10;
    m1.print();
//instance variable

    Scaler o1=new Scaler();
   // System.out.println(a);//error hai 
    System.out.println(o1.a); // Default value is false.
    int[] a={1,2,3,4,5,6,7,8};
    for (int i:a) 
    {
        System.out.println(i);        
    }
    
  }
}
