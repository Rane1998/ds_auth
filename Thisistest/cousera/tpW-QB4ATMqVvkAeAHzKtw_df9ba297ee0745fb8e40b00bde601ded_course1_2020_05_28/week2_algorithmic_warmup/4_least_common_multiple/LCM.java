import java.util.Scanner;

public class LCM {

		 private static long gcd_efficient(long a, long b) {
			   if (b==0) {
				   return  a;
			    }

			    return gcd_efficient( b, a%b) ;
		   
		  }
		 private static long lcm_efficient(long a, long b, long gcd) {
			 return Math.abs(a * b) / gcd;
		 }
		 

		  public static void main(String args[]) {
		    Scanner scanner = new Scanner(System.in);
		    long a = scanner.nextLong();
		   long b = scanner.nextLong();
		    long gcd;
		    gcd=(gcd_efficient(a, b));

		    System.out.println(lcm_efficient(a, b,gcd));
		  }
}