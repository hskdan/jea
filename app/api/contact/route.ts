import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// 이메일 전송을 위한 transporter 설정
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    // 이메일 내용 구성
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // 보험 설계사의 이메일
      subject: `[보험 상담 신청] ${name}님의 상담 신청`,
      html: `
        <h2>새로운 상담 신청이 들어왔습니다</h2>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>연락처:</strong> ${phone}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>상담 내용:</strong></p>
        <p>${message}</p>
      `,
    };

    // 이메일 전송
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: '상담 신청이 성공적으로 전송되었습니다.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('이메일 전송 실패:', error);
    return NextResponse.json(
      { message: '상담 신청 전송에 실패했습니다.' },
      { status: 500 }
    );
  }
} 