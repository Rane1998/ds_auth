import java.util.Scanner;

public class Fibonacci {
  private static long calc_fib(int n) {
    int fibo[] = new int [n+2];
    int i;
    
    fibo[0]=0;
    fibo[1]=1;
    
    for(i=2; i<=n;i++)
    {
    	fibo[i]=fibo[i-1]+fibo[i-2];
    }
    
    return fibo[n];
  }

  
  public static void main(String args[]) {
	
    Scanner in = new Scanner(System.in);
    int n = in.nextInt();

    System.out.println(calc_fib(n));
  }
}