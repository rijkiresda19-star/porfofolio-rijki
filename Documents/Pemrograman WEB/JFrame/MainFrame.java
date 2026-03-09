import javax.swing.*;

public class MainFrame extends JFrame {
    
    public MainFrame() {
        // Set judul window
        setTitle("Aplikasi Java GUI dengan JFrame");
        
        // Set ukuran window
        setSize(500, 400);
        
        // Set lokasi window di tengah layar
        setLocationRelativeTo(null);
        
        // Aktifkan tombol close
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
        // Buat panel utama
        JPanel mainPanel = new JPanel();
        mainPanel.setLayout(null);
        
        // Tambah label
        JLabel label = new JLabel("Selamat Datang di JFrame!");
        label.setBounds(50, 50, 400, 30);
        mainPanel.add(label);
        
        // Tambah tombol
        JButton button = new JButton("Klik Saya");
        button.setBounds(200, 150, 100, 40);
        button.addActionListener(e -> {
            JOptionPane.showMessageDialog(this, "Tombol telah diklik!");
        });
        mainPanel.add(button);
        
        // Tambah text field
        JTextField textField = new JTextField();
        textField.setBounds(50, 250, 400, 30);
        mainPanel.add(textField);
        
        // Tambah label untuk text field
        JLabel textLabel = new JLabel("Input teks:");
        textLabel.setBounds(50, 220, 100, 20);
        mainPanel.add(textLabel);
        
        // Set panel ke frame
        add(mainPanel);
        
        // Tampilkan frame
        setVisible(true);
    }
    
    public static void main(String[] args) {
        new MainFrame();
    }
}
